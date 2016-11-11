(function(){
  "use strict";

  angular.module('public')
  .controller('UserInfoController', UserInfoController);

  UserInfoController.$inject = ['ApiPath','MenuService'];
  function UserInfoController(ApiPath,MenuService) {
    var $ctrl = this;
    $ctrl.basePath = ApiPath;
    $ctrl.userinfo = MenuService.getUserInfo();
    console.log("ctrl userinfo :", $ctrl.userinfo.firstname);

    $ctrl.userRegisted = false;

    if($ctrl.userinfo.firstname != undefined){
        $ctrl.userRegisted = true;
    }

  }//end controller
})();
