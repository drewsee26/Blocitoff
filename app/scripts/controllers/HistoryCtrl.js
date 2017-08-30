(function() {
    function HistoryCtrl(Task) {
        var vm = this;
        
        vm.tasks = Task.all;
    }

    angular
        .module('blocitoff')
        .controller('HistoryCtrl', ['Task', HistoryCtrl]);
})();