'use strict';
angular.module('evolveApp')
    .factory('DataService', ['$resource', function($resource) {
        return $resource('projects.json', {}, {} );
}]);