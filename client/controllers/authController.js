angular.module("authController",['angular-md5','authService',"ngCookies"])
.controller('authCtrl',function($scope,md5,authServ,$cookies,$timeout,$location){

var app = this;
//AUTHENTICATEION LOGIC
this.isLoggedOut = false;
this.isLoggedIn = false;
  this.authenticate = function(authData){
    var password =  md5.createHash(authData.password || '')
    var username = authData.username;
    var data = {"username":username, "password":password};

    authServ.signIn(data).then(function(resData){
if(resData.data.status == "success")
{
    var session = resData.data.sessionId;
    app.isLoggedIn = true;
       $cookies.put('sessionId', session);
       $timeout(function(){
         $location.url('player');
       },1000)
}
else{
  console.log(resData.data.status);
}
    });
  }

//SIGNING OUT FUNCTION

this.signOut = function(){
  var sessionCookie = $cookies.get('sessionId');
  if(sessionCookie){
  authServ.signOut(sessionCookie).then(function(resData){
    $cookies.remove('sessionId');
    app.isLoggedOut = true;
  })
}
else{
  console.log("you dont have sessions");
}
}
})
