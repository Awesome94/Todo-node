import express from 'express';
import db from './db/db';
import bodyParser from 'body-parser'

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.get('/api/V1/todos', (req, res) =>{
    res.status(200).send({
        success: 'true',
        message: 'todos retrived successfully',
        todos: db
    })
});

app.post('/api/v1/todos', (req, res)=>{
    if(!req.body.title){
        return res.status(400).send({
            success: 'false',
            message: 'description is required'
        });
    }
    const todo = {
        id: db.length+1,
        title: req.body.title,
        description: req.body.description
    }
    db.push(todo);
    return res.status(201).send({
        success: 'true',
        message: 'todo added successfully',
        todo
    })
})

app.listen(PORT, ()=>{
    console.log(`App is running  on ${PORT}`)
});
