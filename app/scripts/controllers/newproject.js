'use strict';

/**
 * @ngdoc function
 * @name evolveApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the evolveApp
 */
angular.module('evolveApp')
  .controller('NewprojectCtrl', function ($scope,DataService) {
  	// $scope.projectName;
   //  $scope.project = {
   //  	'name': this.projectName
   //  }
   //  $scope.addProject = function () {
   //  	console.log(this.project);
   //  	$http.put('projects.json', this.project);
   //  }
   //  $scope.submit = function() {
   //      if ($scope.text) {
   //        $scope.list.push(this.text);
   //        $scope.text = '';
   //      }
   //    };
    $scope.obj = {};
     $scope.obj.firstname = 'Mahatma';
     $scope.obj.lastname = 'Gandhi';

     $scope.storedata = function() {
        console.log('Storing Data now');
        DataService.save($scope.obj);
        console.log('Data should have been stored');
     };
  });
