angular.module("authService",[])
.factory('authServ',function($http){
  var authFactory = {};

authFactory.signIn = function(data){
  return $http.post('user/auth',data);
}

authFactory.signOut = function(data){
  return $http.get('user/logout?sessionId='+data);
}

  return authFactory;
})
