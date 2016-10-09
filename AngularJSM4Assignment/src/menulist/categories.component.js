(function () {
  'use strict';

  angular.module('menuApp')
  .component('categoriesList',{
    templateUrl: 'src/menulist/templates/categorieslist.template.html',
    bindings: {
       categories: '<'
    }
  });
})();
