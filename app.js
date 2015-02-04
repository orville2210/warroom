angular.module('WarRoom', ['ngResource', 'ngMessages', 'ngRoute', 'ngAnimate', 'ngMaterial','720kb.socialshare'])
  .config(function ($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });