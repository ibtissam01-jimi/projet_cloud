const mongoose = require('mongoose')

const newSchema =new  mongoose.Schema({
    titre: {type:String},
    description: {type:String},
    project: {type:String},
    priorite: {type:String},
    status:{type:String},
    deadline: {type:Date}
})

const Task = mongoose.model('Task',newSchema);
module.exports = Task;