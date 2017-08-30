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
        // When I click the button to mark as complete, I want to 
        // reference the task id and change the status to complete.
        Task.complete = function(task) {
            var taskRef = tasks.$indexFor(task);
            tasks[taskRef]["status"] = "completed";
            tasks.$save(taskRef).then(function(ref) {
                ref.key() === tasks[taskRef].$id;
            });
        };
        
        Task.expire = function(task) {
            var taskRef = tasks.$indexFor(task);
            var createDate = tasks[taskRef]["createdAt"];
            var d = new Date();
            var m = d.getTime();
            
            if(createDate < (m - 604,800,000)){
                tasks[taskRef]["status"] = "completed";
                    tasks.$save(taskRef).then(function(ref) {
                    ref.key() === tasks[taskRef].$id;
                });
            }
        };
        
        return Task;
        
    }
    
    angular
        .module('blocitoff')
        .factory('Task', ['$firebaseArray', Task]);
})();