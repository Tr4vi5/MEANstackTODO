const myApp = angular.module('myApp', []);

myApp.controller('TaskManager', function($http){
    console.log('Task Manager is ready');
    const vm = this;

    vm.taskList = [];

    vm.appendTasks = function() {
        $http({
            method: 'GET',
            url: '/tasks'
        }).then(function(response){
            console.log('Got tasks:', response.data);
            vm.taskList = response.data;
        }).catch(function(error){
            alert('Error in GET', error);
        })
    };// end appendTasks function

    vm.sendTask = function(){
        let taskToAdd = {
            task: vm.taskIn,
            category: vm.categoryIn,
            description: vm.descriptionIn,
            notes: vm.notesIn,
            complete: vm.completeIn
        };
        console.log(taskToAdd);
        
        $http({
            method: 'POST',
            url: '/tasks',
            data: taskToAdd
        }).then(function(response){
            console.log('In sendTask POST', response.data);
            vm.appendTasks();
        }).catch(function(error){
            alert('Error in sendTask POST', error);
        });
    };//end sendTask function

    vm.appendTasks();
})