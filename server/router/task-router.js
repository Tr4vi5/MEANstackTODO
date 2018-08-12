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
    complete: {type: Boolean}
});
//model connecting new database collection to Schema
const Tasks = mongoose.model('Tasks', TaskSchema);
// routes

//export
module.exports = router;