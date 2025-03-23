import express from 'express';
import cors from 'cors';
import { MongoClient } from 'mongodb'
import dotenv from 'dotenv'

dotenv.config();

const app = express();
app.use(cors())
app.use(express.json())

const port = 5000

const jobs = []
app.get("/", (req, res) => {
    res.send({
        "message": "hello world"
    })
})

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