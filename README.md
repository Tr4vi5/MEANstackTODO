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
4. Navigate to localhost:5000 in your browser of choice
5. Enjoy!

Screen Shot

![Screenshot of project](https://i.imgur.com/02hlFxS.png)

Completed Features

- Task manager site that allows the user to post new tasks to a mongo database and update the DOM with the list of tasks immediately.

[x] - Create a front end that allows a user to enter a task.

    - [x] Task properties: {task: string, category: string, description: string, notes: string, date: string, complete: boolean}

    - [x] Each task should have a "complete task" checkbox and "delete task" button

[x] - Set up the server and connect it to Mongo using mongoose.

[x] - Create a schema in a router to send task data to the Mongo database.

[x] - Use angular models to create an object from the inputs to POST to the router on the server and the Mongo database collection.

[x] - Once a task is added to the database, the front end should make a GET request to the database in order to to display the array of objects from the server.

[x] - a PUT request that changes the tasks "complete" property should be written for the complete task checkbox, and the DOM should change to reflect this change

[x] - a DELETE request that splices the object from the array on the database and updates the DOM should be written

[x] - CSS styling to finish it off

[x] - Implement Bootstrap to take the visuals of the page up a notch.

[x] - Move the inputs into a form and use ng-submit so that the user can hit enter to add a new task.

[x] - In whatever fashion you would like, create an 'are you sure: yes / no' option when deleting a task. Once again, you can interpret this however you would like.

[x] - Add front-end validation to the 'make-a-task' form.

Next Steps

[] - Add a category field for the task. Allow users to filter by task category.

[] - Adjust the logic so that completed tasks are brought to the bottom of the page, where the remaining tasks left to complete are brought to the top of the list.


Authors

Travis Dunn

Acknowledgments

Prime Digital Academy