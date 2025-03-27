const express = require('express');
const db = require('./dbConnect');
const cors = require('cors');
const app = express();
app.use(express.json())
const axios = require('axios');
const Task = require('./models/TaskModel');
const Comment = require('./models/CommentModel')
db.check();


app.use(cors());
app.use(express.json());

//lister tout les taches
app.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find();
        return res.status(200).json({ data: tasks })
    } catch (error) { res.status(404).json({ message: "error" }) }
})
//lister une tache specifique
app.get('/tasks/:id', async (req, res) => {
    try {
        const selectedOne = await Task.findById(req.params.id);
        return res.status(200).json({ data: selectedOne })
    } catch (error) { res.status(404).json({ message: "task was not Found" }) }
})
app.get('/projects/:id/tasks',async (req,res)=>{
    const {id} = req.body;
    try {
        const response =await axios.get(`http://localhost:5001/api/projects/${id}`);
        if(response.status ===200){
            return res.status(200).json({data:response});
        }
        return res.status(404).json({message:"project was not found"});
    }catch(err){
        res.json({messagex:err})
    }
})
//creation d'une nouvelle tache
app.post('/task', async (req, res) => {
    const { titre, projet_id, description, priorite, status, deadline } = req.body;

    const projectResponse = await axios.get(`http://127.168.0.1:5001/api/projects/${projet_id}`)
    if (projectResponse.status === 200) {
        const newTask = new Task({
            titre: titre,
            projet_id: projet_id,
            description: description,
            priorite: priorite,
            status: status,
            deadline: deadline
        })
        newTask.save();
        return res.status(201).json({ message: "created" })
    } else {
        return res.status(404).json({ message: "error" })
    }

})

//modification du status du tache
app.patch('/tasks/:id', async (req, res) => {
    const id = req.params.id;
    const { newStatus } = req.body;
    try {

        const task = await Task.findByIdAndUpdate(id, { status: newStatus }, { new: true });
        return res.status(200).json({ message: 'updated', data: task })
    } catch (error) {
        return res.json({ error: error })
    }

})
//supprimer une tache
app.delete('/tasks/:id', async (req, res) => {
    const id = req.params.id;
    db.check();
    try {
        await Task.findByIdAndDelete(id)
        return res.status(200).json({ message: 'task has been deleted' })
    } catch (error) {
        return res.status(404).json({ message: error })
    }
})



//lister tout les commentaire pour une seule tache
app.get('/tasks/:id/comments', async (req,res)=>{
    const id = req.params.id;
    try{
        
        const comments = await Comment.find({task_id:id}).populate('user_id');
        return res.status(200).json({message:'comments',data:comments});
    }catch(err){
        return res.status(404).json({message:'task not found'});
    }
    
})
//ajouter un commentaire pour une tache
app.post('/tasks/:id/comment', async (req, res) => {
    const id = req.params.id;
    const { comment } = req.body;
    const task = Task.findById(id);
    //normalement user_id doit etre prend du service auth
    const user_id = 'ljkhsdfjidkh125648';
    if (task && user_id) {
        const newComment = new Comment({
            user_id: user_id,
            task_id: id,
            comment: comment
        })
        newComment.save();
        return res.status(201).json({ message: 'comment added' })
    }else{
        return res.status(404).json({ message: "error" })
    }
});

//affectation d'un utilisateur a une tache
app.post('/tasks/:id/assign',async (req,res)=>{
    const id = req.params.id;
    //const {user_id} = req.body;
    const user_id = 'ljkhsdfjidkh125648';
    const task = await Task.findById(id);
    if(!task)return res.status(404).json({message:'selected task does not exist'})
    //apres le service auth etre complete
    //const userResponse = axios.get(`http://127.168.0.1:5002/users/${user_id}`);
    //if(userResponse.status !== 200) return res.status(404).json({message:'user does not exist'});
    console.log(task)
    task.save();
    return res.status(200).json({message:'task assigned to user'});
})

app.listen(5409, () => console.log('running on port 5409'));