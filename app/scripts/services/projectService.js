'use strict';
angular.module('evolveApp')
    .factory('webtest', function($q, $timeout, $http) {
    var Webtest = {
        fetch: function() {

            var deferred = $q.defer();

            $timeout(function() {
                $http.get('data/projects.json').success(function(data) {
                    deferred.resolve(data);
                });
            }, 30);

            return deferred.promise;
        }
    };

    return Webtest;
});