(function() {
    function HomeCtrl(Task) {
        var vm = this;
        
        vm.tasks = Task.all;
        
        vm.addTask = function() {
            Task.add(vm.task);
            this.task.description = "";
            this.task.priority = "";
        };
        
        vm.completeTask = function(task) {
            Task.complete(task);
        };
        
        vm.expireTask = function(task) {
            task.hide = true;
            Task.expire(task);
        };
    }

    angular
        .module('blocitoff')
        .controller('HomeCtrl', ['Task', HomeCtrl]);
})();