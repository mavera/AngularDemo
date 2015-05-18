(function () {
    'use strict';

  var app = angular
        .module('app')
        .controller('bugsController', bugsController);

    bugsController.$inject = ['$scope','Bugs']; 

    function bugsController($scope,Bugs) {
        var vm = this;

        activate();

        function activate() {
            vm.title = 'bugsController';
//            vm.bugs = ['ddd','aaa'];             
            Bugs.list().then(function (res) {
                 vm.bugs = angular.fromJson(res.data);   
            });
        }
    }
})();
    