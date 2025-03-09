import express from "express";
import cors from 'cors';

const app = express();
const PORT = 3001;


app.get('/', (req, res) => {
    res.send('hi')
})


app.listen(PORT, console.log(`http://localhost:${PORT}`));


