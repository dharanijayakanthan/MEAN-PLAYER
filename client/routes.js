angular.module('myRoutes', ['ngRoute'])
.config(function($routeProvider){
$routeProvider
.when('/authenticate',{
  templateUrl:'views/authenticate.html',
  controller:'authCtrl'
})
.when('/player',{
  templateUrl:'views/player.html',
  controller:'playerCtrl'
})
})
