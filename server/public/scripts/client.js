const myApp = angular.module('myApp', []);

myApp.controller('TaskManager', function ($http) {
    console.log('Task Manager is ready');
    const vm = this;

    vm.taskList = [];

    vm.appendTasks = function () {
        $http({
            method: 'GET',
            url: '/tasks'
        }).then(function (response) {
            console.log('Got tasks:', response.data);
            vm.taskList = response.data;
        }).catch(function (error) {
            alert('Error in GET', error);
        })
    };// end appendTasks function

    vm.sendTask = function () {
        let taskToAdd = {
            task: vm.taskIn,
            category: vm.categoryIn,
            description: vm.descriptionIn,
            notes: vm.notesIn
        };

        $http({
            method: 'POST',
            url: '/tasks',
            data: taskToAdd
        }).then(function (response) {
            console.log('In sendTask POST', response.data);
            vm.appendTasks();
            vm.taskIn = '';
            vm.categoryIn = '';
            vm.descriptionIn = '';
            vm.notesIn = '';
        }).catch(function (error) {
            alert('Error in sendTask POST', error);
        });
    };//end sendTask function

    vm.completeTask = function (taskId) {
        $http({
            method: 'PUT',
            url: '/tasks/complete/' + taskId
        }).then(function (response) {
            vm.appendTasks();
        }).catch(function (error) {
            alert('Error in completeTask', error);
        });
    };// end completeTask function

    vm.deleteTask = function (deleteTaskId) {
        let answer = confirm('Are you sure?');

        if (answer === true) {
            $http({
                method: 'DELETE',
                url: '/tasks/delete/' + deleteTaskId
            }).then(function (response) {
                vm.appendTasks();
            }).catch(function (error) {
                alert('Unable to delete task', error);
            });
        }
    };// end deleteTask function

    vm.appendTasks();
})