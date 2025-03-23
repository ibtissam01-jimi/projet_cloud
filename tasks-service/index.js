const express = require('express');
const Task = require('./TaskModel');
const db = require('./dbConnect');
const app = express();
app.use(express.json())
const axios = require('axios');
db.check();




app.get('/tasks', async(req, res) => {
    try {
        const tasks =await Task.find();
        return res.status(200).json({data:tasks})
    } catch(error){res.status(404).json({ message: "error" })}
})
app.get('/tasks/:id', async(req, res) => {
    try {
        const selectedOne =await Task.findById(req.params.id);
        return res.status(200).json({data:selectedOne})
    } catch(error){res.status(404).json({ message: "task was not Found" })}
})
//creation d'une nouvelle tache
app.post('/task',async (req, res) => {
    const { titre,projet_id, description,priorite,status,deadline } = req.body;

    const projectResponse = await axios.get(`http://127.168.0.1:5001/api/projects/${projet_id}`)
    if (projectResponse.status === 200){
        const newTask = new Task({
            titre: titre,
            projet_id: projet_id,
            description: description,
            priorite: priorite,
            status:status,
            deadline: deadline
        })
        newTask.save();
        return res.status(201).json({message:"created"})
    }else{
    return res.status(404).json({ message: "error" })
}

})

//modification du status du tache
app.patch('/tasks/:id',async (req,res)=>{
    const id = req.params.id;
    const { newStatus } = req.body;
    try{

        const task = await Task.findByIdAndUpdate(id, { status: newStatus }, { new: true });
        return res.status(200).json({message:'updated',data:task})
    }catch(error){
        return res.json({error:error})
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