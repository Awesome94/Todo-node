import express from 'express';
import db from './db/db';

const app = express();

app.get('/api/V1/todos', (req, res) =>{
    res.status(200).send({
        success: 'true',
        message: 'todos retrived successfully',
        todos: db
    })
});

const PORT = 5000;

app.listen(PORT, () =>{
    console.log(`server running on port ${PORT}`)
});