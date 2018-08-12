//requires
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Schema
const TaskSchema = new Schema({
    task: {type: String},
    category: {type: String},
    description: {type: String},
    notes: {type: String},
    complete: {type: Boolean, default: false}
});
//model connecting new database collection to Schema
const Tasks = mongoose.model('Tasks', TaskSchema);
// routes
router.get('/', (req, res)=>{
    console.log('Successful GET from task-router');
    Tasks.find({}).then((foundTasks)=>{
        console.log('Found tasks from database:', foundTasks);
        res.send(foundTasks);
    }).catch((error)=>{
        console.log('Error in GET request:', error);
        res.sendStatus(500);
    });
});//end GET route
router.post('/', (req, res)=>{
    console.log('Successful POST to task-router', req.body);
    let taskToAdd = req.body; // task from client to server 
    let taskToSend = new Tasks(taskToAdd); // task from server to database

    taskToSend.save().then(()=>{
        console.log('Task saved to database', taskToSend);
        res.sendStatus(200);
    }).catch((error)=>{
        console.log('Error in POST', error);
        res.sendStatus(500);
    });
});//end POST route

router.put('/complete/:id', (req, res)=>{
    console.log('Update', req.params.id);
    Tasks.findOne({_id: req.params.id}).then((foundTask)=>{
        foundTask.complete = !foundTask.complete;
        foundTask.save().then((response)=>{
            res.sendStatus(200);
        }).catch((error)=>{
            console.log('Error in tasks/complete/ PUT', error);
            res.sendStatus(500);
        });
    });
});// end /complete/:id PUT route

//export
module.exports = router;