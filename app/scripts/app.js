'use strict';

/**
 * @ngdoc overview
 * @name evolveApp
 * @description
 * # evolveApp
 *
 * Main module of the application.
 */
angular
  .module('evolveApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/newproject', {
        templateUrl: 'views/newproject.html',
        controller: 'NewprojectCtrl'
      })
      .when('/project', {
        templateUrl: 'views/project.html',
        controller: 'projectCtrl'
      })
      .when('/visualize', {
        templateUrl: 'views/visualize.html',
        controller: 'visualizeCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
