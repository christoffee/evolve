'use strict';

/**
 * @ngdoc function
 * @name evolveApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the evolveApp
 */
angular.module('evolveApp')
  .controller('projectCtrl', ['$http', '$scope', function ($http,$scope) {
    $scope.toggled = false;

  	$http.get('projects.json').
      success(function(data) {
        $scope.project = data.projects[0];
    });
    
    $scope.toggleMenu = function() {
      $scope.toggled = !$scope.toggled;
    };

  }]);
