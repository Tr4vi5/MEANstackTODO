# MEANstackTODO
Prime Weekend Challenge Three

Name of Application
To-do list web app built using M(ongo)E(xpress)A(ngular.js)N(ode) full-stack.

Built With
Mongo
Express
Angular.js
Node.js
Bootstrap

Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

Installing
Steps to get the development environment running.

1. Download this project.
2. npm install
3. npm start
4. And so on...

Screen Shot
Include one or two screen shots of your project here (optional). Remove if unused.

Completed Features
- Task manager site that allows the user to post new tasks to a mongo database and update the DOM with the list of tasks immediately.



Next Steps

[x] - Create a front end that allows a user to enter a task.

    - [x] Task properties: {task: string, category: string, description: string, notes: string, date: string, complete: boolean}

    - [x] Each task should have a "complete task" checkbox and "delete task" button

[x] - Set up the server and connect it to Mongo using mongoose.

[x] - Create a schema in a router to send task data to the Mongo database.

[x] - Use angular models to create an object from the inputs to POST to the router on the server and the Mongo database collection.

[x] - Once a task is added to the database, the front end should make a GET request to the database in order to to display the array of objects from the server.

[x] - a PUT request that changes the tasks "complete" property should be written for the complete task checkbox, and the DOM should change to reflect this change

[] - a DELETE request that splices the object from the array on the database and updates the DOM should be written

[] - CSS styling to finish it off

Authors
Travis Dunn

Acknowledgments
Prime Digital Academy