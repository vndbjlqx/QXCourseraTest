(function () {
"use strict";

angular.module('public')
.controller('RegistrationController', RegistrationController);

RegistrationController.$inject = ['MenuService'];
function RegistrationController(MenuService) {
  var $ctrl = this;
  $ctrl.completed = false;
  $ctrl.favoritedishError = false;
  //a user object to store user info
  $ctrl.user = {};
  $ctrl.user.firstname = "";
  $ctrl.user.lastname = "";
  $ctrl.user.emailaddress = "";
  $ctrl.user.phonenumber = "";
  $ctrl.user.favoritedish = "";
  $ctrl.user.menuItem = {};


  //func to deal with form submit
  $ctrl.submit = function () {

    //first check the favoritedish right ?
      //request this REST API  https://YOUR-CHOSEN-SUBDOMAIN.herokuapp.com/menu_items/SHORT-NAME.json
      //favoritedish is the SHORT-NAME
  var promise = MenuService.getMenuItem($ctrl.user.favoritedish);
  promise.then(function(response){
      console.log("controller menuitem success:",response.data);
         //if get success response,
         //show success message to signup page
        $ctrl.user.menuItem = response.data;
        $ctrl.completed = true;
        $ctrl.favoritedishError = false;

        //then save the user object to service
        MenuService.saveSignUpUserInfo($ctrl.user);
  })
  .catch(function(response){
            console.log("controller menuitem error:",response);
            //if get error, SHORT-NAME not right
            //show error message to signup page
            $ctrl.completed = false;
            $ctrl.favoritedishError = true;
            MenuService.getMenuItems()
            .then(function(data){
                  $ctrl.menuItems = data.menu_items;
            });
          });

  }//end submit

  $ctrl.chooseFavorite = function (shortname){
    $ctrl.user.favoritedish = shortname;
  }//end chooseFavorite

}//end controller

})();
