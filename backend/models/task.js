const mongoose = require("mongoose");

//Task Schema---------
const taskSchema = mongoose.Schema({
    title:{
        type: String,
        required: [true, 'Please add a title'],
    },
    description:{
        type: String,
        required:[true, 'Please add a description'],
    },
    completed:{
        type: Boolean,
        default: false,
    }

},{
        timestamps:true,
    });

//Create Model-----------
const Task = mongoose.model('Task', taskSchema );

module.exports = Task;