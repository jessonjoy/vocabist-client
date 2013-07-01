'use strict';


// Declare app level module which depends on filters, and services
angular.module('vocabist', ['vocabist.filters', 'vocabist.services', 'vocabist.directives', 'vocabist.controllers']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'HomeController'});
    $routeProvider.when('/learn', {templateUrl: 'partials/learn.html', controller: 'LearnController'});
    $routeProvider.when('/practice', {templateUrl: 'partials/practice.html', controller: 'PracticeController'});
    $routeProvider.otherwise({redirectTo: '/home'});
  }]);
