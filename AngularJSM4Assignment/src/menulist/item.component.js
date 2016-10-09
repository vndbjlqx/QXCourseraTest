(function () {
  'use strict';

  angular.module('menuApp')
  .component('itemDetail',{
    templateUrl: 'src/menulist/templates/itemDetail.template.html',
    bindings: {
       itemDetail: '<'
    }
  });
})();
