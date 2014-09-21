'use strict';

/**
 * @ngdoc function
 * @name evolveApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the evolveApp
 */
angular.module('evolveApp')
  .controller('MainCtrl', ['$scope','$http','$location', function ($scope,$http,$location) {
  	$http.get('projects.json').
        success(function(data) {
          $scope.projects = data;
        });
    $scope.getProject = function () {
    	$location.path( '/project' );
    };
  }]);
