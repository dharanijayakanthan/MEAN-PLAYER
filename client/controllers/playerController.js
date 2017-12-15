angular.module("playerController",['playerService','ngCookies'])
.controller("playerCtrl",function($scope,$rootScope,playerServ,$cookies){
  $scope.loggedin = false;
var sessionCookie = $cookies.get('sessionId');
if(sessionCookie){
  $scope.$on('$routeChangeSuccess', function() {
    $scope.loggedin = true;
    playerServ.getVideos(sessionCookie).then(function(resData){
      $scope.videos= resData.data.data;
    });
  });
}
else {
  $scope.loggedin = false;
  console.log("rellay!! get the hell out");
}
})
