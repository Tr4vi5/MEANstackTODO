//requires
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const mongoose = require('mongoose');
const taskRouter = require('./router/task-router');
const mongoURI = 'mongodb://localhost:27017/taskapp';
//uses
app.use(bodyParser.json()); // allows us to use req.body for client requests with angular.js
app.use(express.static('server/public')); // uses server/public as our client side
app.use('/tasks', taskRouter);
//listen
app.listen(PORT, ()=>{
    console.log('Listening on port:', PORT);
})
//connect to database
mongoose.connect(mongoURI, { useNewUrlParser: true });
mongoose.connection.on('open', ()=>{
    console.log('Connected to Mongo');
})
mongoose.connection.on('error', (error) => {
    console.log('Error connecting to Mongo', error);
})