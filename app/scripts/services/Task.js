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
            
        
        return Task;
        
    }
    
    angular
        .module('blocitoff')
        .factory('Task', ['$firebaseArray', Task]);
})();