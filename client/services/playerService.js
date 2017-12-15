angular.module('playerService',[])
.factory('playerServ',function($http){
  var playerFactory = {};
playerFactory.getVideos = function(sessionCookie){
//http://localhost:3000/videos?sessionId=qOhmSmXoLuFv6g1YvvXOU4UJ2nuI11jA&skip=1&limit=1
var skip = 1, limit = 5;
return $http.get('videos?sessionId='+sessionCookie+'&skip='+skip+'&limit='+limit);
}
  return playerFactory;
})
