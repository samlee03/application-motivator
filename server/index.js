import express from 'express';
import cors from 'cors';
import { MongoClient, ObjectId  } from 'mongodb'
import dotenv from 'dotenv'
import bcrypt from 'bcrypt'
import cookieParser from 'cookie-parser'
import { createAccessToken, createRefreshToken, sendAccessToken, sendRefreshToken } from './tokens.js';
import jwt from 'jsonwebtoken'; 

dotenv.config();

const app = express();
app.use(cookieParser())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true}));

const port = 5000

const client = new MongoClient(process.env.MONGO_URI);

app.get("/", (req, res) => {
    res.send({
        "message": "hello world"
    })
})

app.post("/register", async (req, res) => {
    const { email, password } = req.body;

    try {
        await client.connect();

        const db = client.db('db');
        const users = db.collection('users');

        const existingUser = await users.findOne({ email });
        if (existingUser) {
          return res.status(400).json({ error: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        await users.insertOne({ email, password: hashedPassword });

        console.log(email)
        console.log(hashedPassword)

        res.status(201).json({ message: "User registered successfully" });

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Something went wrong" });
    }
})

app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const db = client.db('db');
        const users = db.collection('users');

        const user = await users.findOne({ email });
        if(!user) {
            return res.status(400).json({ error: "User does not exist"})
        }

        const valid = await bcrypt.compare(password, user.password);
        if (!valid) {
          return res.status(401).json({ error: "Invalid password" });
        }

        const accessToken = createAccessToken(user);
        const refreshToken = createRefreshToken(user);

        await users.updateOne(
            { _id: user._id },
            { $set: { refreshToken }});

          sendRefreshToken(res, refreshToken);
          sendAccessToken(res, accessToken, user.email);

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Something went wrong" });
    }
})

app.post("/logout", async (_req, res) => {
    res.clearCookie('refreshToken')
    return res.send({
        message: 'Logged out',
    })
});

app.get("/api/applications", async (req, res) => {
    try {
      const token = req.headers.authorization?.split(' ')[1];
      
      if (!token) {
        return res.status(401).json({ message: 'No token provided' });
      }
      
      const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
      const userId = decoded.userId;
      
      const db = client.db('db');
      const users = db.collection('users');
      
      const user = await users.findOne(
        { _id: new ObjectId(userId) },
        { projection: { applications: 1 } }
      );
      
      res.status(200).json(user.applications || []);
      
    } catch (error) {
      console.error("Error fetching applications:", error);
      res.status(401).json({ message: 'Invalid token or server error' });
    }
})
  
  app.post("/api/applications", async (req, res) => {
    try {
      const token = req.headers.authorization?.split(' ')[1];
      
      if (!token) {
        return res.status(401).json({ message: 'No token provided' });
      }
      
      const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
      const userId = decoded.userId;
      
      const { jobTitle, company, postDate, location, salary, status = 'Applied' } = req.body;
      
      const db = client.db('db');
      const users = db.collection('users');
      
      const newApplication = {
        _id: new ObjectId(),
        jobTitle,
        company,
        postDate,
        location,
        salary,
        status,
        appliedDate: new Date()
      };
      
      const result = await users.updateOne(
        { _id: new ObjectId(userId) },
        { $push: { applications: newApplication } }
      );
      
      res.status(201).json({
        message: 'Application added successfully',
        applicationId: newApplication._id
      });
      
    } catch (error) {
      console.error("Error adding application:", error);
      res.status(401).json({ message: 'Invalid token or server error' });
    }
})




const jobs = []

app.get("/jobs", async(req, res) => {
    const client = new MongoClient(process.env.MONGO_URI);

    client.connect()
    const db = client.db('db');
    const jobs = db.collection('jobs');

    const documents = await jobs.find({}).toArray();
    res.send({
        // "test": "test"
        "documents": documents
    })
})


// For the purpose of adding jobs to the DB
// app.get("/add_jobs", async (req, res) => {
//     const client = new MongoClient(process.env.MONGO_URI)
//     try {
//         await client.connect();
//         const database = client.db('db');
//         const collection = database.collection('jobs');

//         const result = await collection.insertMany(jobs);
//         console.log(`Inserted ${result.insertedCount} documents.`);
//     } catch (e) {
//         console.error(e);
//     } finally {
//         await client.close();
//     }
// })

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})