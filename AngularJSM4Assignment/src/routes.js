(function (){
'use strict';

angular.module('menuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider','$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

// Redirect to home page if no other URL matches
$urlRouterProvider.otherwise('/');

// *** Set up UI states ***
$stateProvider
  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menulist/templates/home.template.html'
  })
  //CategoriesList page
  .state('viewCategoriesList', {
      url: '/viewCategoriesList',
      templateUrl: 'src/menulist/templates/categories.template.html',
      controller: 'CategoriesListController as mainList',
      resolve: {
        categories: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    })
    .state('viewItemDetail', {
      url: '/item-detail/{categoryShortName}',
    templateUrl: 'src/menulist/templates/item.template.html',
    controller: 'ItemDetailController as itemDetail',
    resolve: {
      item: ['$stateParams', 'MenuDataService',
      function ($stateParams,MenuDataService) {
        return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
      }]
    }
  });

}

})();
