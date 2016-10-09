(function (){
  'use strict';

  angular.module('menuApp')
  .controller('ItemDetailController',ItemDetailController);

  ItemDetailController.$inject = ['item'];
  function ItemDetailController(item) {
    var itemDetail = this;
    itemDetail.item = item;
  }
})();
