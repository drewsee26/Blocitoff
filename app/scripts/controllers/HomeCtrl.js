(function() {
    function HomeCtrl(Task) {
        var vm = this;
        
        vm.tasks = Task.all;
        
        vm.addTask = function() {
            Task.add(vm.task);
        };
    }

    angular
        .module('blocitoff')
        .controller('HomeCtrl', ['Task', HomeCtrl]);
})();