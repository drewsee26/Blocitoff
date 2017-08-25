(function() {
    function HomeCtrl(Task) {
        var vm = this;
        
        vm.tasks = Task.all;
        
        vm.addTask = function() {
            Task.add(vm.task);
            this.task.description = "";
            this.task.priority = "";
        };
    }

    angular
        .module('blocitoff')
        .controller('HomeCtrl', ['Task', HomeCtrl]);
})();