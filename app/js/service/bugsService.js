(function () {
    'use strict';

    angular
        .module('bugsService', ['ngResource'])
        .factory('Bugs', Bugs)
        

    Bugs.$inject = ['$resource'];

    function Bugs($resource) {
        var x = $resource('/api/bugs/:id');
        return x;
    }
})();