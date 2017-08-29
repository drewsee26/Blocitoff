(function(){
    function Task ($firebaseArray){
        var Task = {};
        var ref = firebase.database().ref().child("tasks");
        var tasks = $firebaseArray(ref);
        
        Task.all = tasks;
        
        Task.add = function(task) {
            tasks.$add({
                description: task.description,
                priority: task.priority,
                createdAt: firebase.database.ServerValue.TIMESTAMP,
                status: "active"
            });
        };
        // When I click the checkmark to mark as complete, I want to 
        // reference the task id and change the status to complete.
        Task.complete = function(task) {
            
        };    
        
        return Task;
        
    }
    
    angular
        .module('blocitoff')
        .factory('Task', ['$firebaseArray', Task]);
})();