(function () {
    'use strict';

    angular
        .module('bugsService', ['ngResource'])
        .factory('Bugs', Bugs);
        

    Bugs.$inject = ['$http'];

    function Bugs($http) {        
        return {
                list: list         
            };
            
            function list() {
                return $http.get("js/mock/bugs.js");
            }
    }
})();