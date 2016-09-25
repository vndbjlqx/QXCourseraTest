(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
function ToBuyShoppingController(ShoppingListCheckOffService) {
  var toBuyList = this;

  toBuyList.isEmpty = false;

  toBuyList.items = ShoppingListCheckOffService.getToBuyListItems();

  toBuyList.buyItem = function (itemIndex) {
      ShoppingListCheckOffService.buyItem(itemIndex);
      toBuyList.isEmpty = ShoppingListCheckOffService.isToBuyListEmpty();
  }


}


AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
  var checkedList = this;

  //checkedList.isEmpty = true;

  checkedList.items = ShoppingListCheckOffService.getCheckedListItems();

  checkedList.isCheckedListEmpty = function() {
      return checkedList.items.length === 0;
  };



}


function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var toBuyListItems = [
    {name:"Applles", quantity:10},
    {name:"Pears", quantity:5},
    {name:"Oranges", quantity:8},
    {name:"Eggs", quantity:12},
    {name:"Bread", quantity:8},
    {name:"Potatoes", quantity:12}
  ];

  var checkedListItems = [];

  service.getToBuyListItems = function () {
    return toBuyListItems;
  };

  service.getCheckedListItems = function () {
    return checkedListItems;
  };

  service.buyItem = function(itemIdex) {
    var checkedItem = toBuyListItems.splice(itemIdex, 1);
    service.addItemToCheckedList(checkedItem[0]);
  };

  service.addItemToCheckedList = function (checkedItem) {
    checkedListItems.push(checkedItem);
  };

  service.isToBuyListEmpty = function () {
      return (toBuyListItems.length == 0)?true:false;
  };

} // end of ShoppingListCheckOffService

})();
