import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors())
app.use(express.json())

const port = 5000

app.get("/", (req, res) => {
    res.send({
        "message": "hello world"
    })
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})