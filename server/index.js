import express from 'express';
import cors from 'cors';
import { MongoClient } from 'mongodb'
import dotenv from 'dotenv'
import bcrypt from 'bcrypt'
import cookieParser from 'cookie-parser'
import { createAccessToken, createRefreshToken, sendAccessToken, sendRefreshToken } from './tokens.js';


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