const express = require('express');
const Task = require('./TaskModel');
const db = require('./dbConnect');
const app = express();

app.get('/tasks',(req,res)=>{
    db.check();
    return res.send('all tasks')
})
app.post('/task',(req,res)=>{
    const {titre,description} = req.body;

    const newTask = new Task({
        titre:titre,
        description:description
    })
    newTask.save();

})

app.listen(5409,()=>console.log('running on port 5409'));