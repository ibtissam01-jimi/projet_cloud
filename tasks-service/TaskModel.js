const mongoose = require('mongoose')

const newSchema =new  mongoose.Schema({
    titre: {type:String},
    description: {type:String},
    project: {type:String},
    priorite: {type:String,
        enum: ['faible', 'moyen', 'urgent'],
        default: 'faible'
    },
    status: {
        type: String,
        enum: ["En cours", "Terminé", "En attente"],
        default: "En attente",
      },
    deadline: {type:String}
})

const Task = mongoose.model('Task',newSchema);
module.exports = Task;