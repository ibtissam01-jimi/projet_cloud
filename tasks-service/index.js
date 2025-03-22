const express = require('express');
const Task = require('./TaskModel');
const db = require('./dbConnect');
const app = express();
app.use(express.json())
app.get('/tasks', async(req, res) => {
    db.check();
    try {
        const tasks =await Task.find();
        return res.status(200).json({data:tasks})
    } catch(error){res.status(404).json({ message: "error" })}
})
app.post('/task', (req, res) => {
    const { titre, description,priorite,deadline } = req.body;
    
    db.check();
    try{
        
    const newTask = new Task({
        titre: titre,
        description: description,
        priorite: priorite,
        deadline: deadline
    })
    newTask.save();
    return res.status(201).json({message:"created"})
}catch(err){
    return res.status(404).json({ message: "error" })
}

})

app.delete('/tasks/:id',async(req,res)=>{
    const id = req.params.id;
    db.check();
    try{
        await Task.findByIdAndDelete(id)
        return res.status(200).json({message:'task has been deleted'})
        }catch(error){
            return res.status(404).json({ message: error })
            }
})

app.listen(5409, () => console.log('running on port 5409'));