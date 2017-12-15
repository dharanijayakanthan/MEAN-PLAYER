angular.module('avgFilter',[])
.filter('average',function(){

return function(arras){

var sum = 0;
for(var i = 0; i <arras.length; i++)
{
  sum = sum + arras[i];
}
return sum / arras.length;

}

})
