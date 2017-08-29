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
            task.hide = true;
            Task.complete(vm.task);
        };
    }

    angular
        .module('blocitoff')
        .controller('HomeCtrl', ['Task', HomeCtrl]);
})();