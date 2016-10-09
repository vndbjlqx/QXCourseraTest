(function (){
  'use strict';

  angular.module('menuApp')
  .controller('CategoriesListController',CategoriesListController);

  CategoriesListController.$inject = ['categories'];
  function CategoriesListController(categories) {
    var mainList = this;
    mainList.items = categories;
    console.log("CategoriesListController mainList.items=",categories);
  }
})();
