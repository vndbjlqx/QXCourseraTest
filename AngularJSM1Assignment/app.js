(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', MsgController);

MsgController.$inject = ['$scope'];

function MsgController($scope) {
   $scope.eatThings = "";
   $scope.message = "";

   $scope.sayMessage = function () {
     var things = $scope.eatThings.split(",");

     for(var i = 0 ;i<things.length;i++){
         if(things[i].trim() == "" || typeof(things[i]) == "undefined"){
              things.splice(i,1);
              i= i-1;
               }
     }

     var  msg = "";
     if(things.length == 0 ){
       msg = "Please enter data first!";
     }else if (things.length <=3 ) {
       msg = "Enjoy!";
     }else {
       msg = "Too much!";
     }
     $scope.message = msg;
   };

}


})();
