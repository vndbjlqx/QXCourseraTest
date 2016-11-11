(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;
  service.user = {};

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

  service.getMenuItem = function (shortname) {
    var shortnameJson = "/menu_items/"+shortname+".json";
    return $http.get(ApiPath + shortnameJson);
  };

  service.saveSignUpUserInfo = function (user) {
    //save the user info to the service scope.
    service.user.firstname = user.firstname;
    service.user.lastname = user.lastname;
    service.user.emailaddress = user.emailaddress;
    service.user.phonenumber = user.phonenumber;
    service.user.favoritedish = user.favoritedish;
    service.user.menuItem = user.menuItem;
  };

  service.getUserInfo = function() {
    return service.user;
  }

}



})();
