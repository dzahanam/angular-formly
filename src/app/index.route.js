(function() {
  'use strict';

  angular
    .module('formlyTest')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('form', {
        url: '/form',
        templateUrl: 'app/formly/form.html',
        controller: 'FormController',
        controllerAs: 'vm'
      })
      .state('form-uiselect', {
        url: '/form-uiselect',
        templateUrl: 'app/formly/form-select.html',
        controller: 'FormSelectController',
        controllerAs: 'vm'
      })
      ;

    $urlRouterProvider.otherwise('/');
  }

})();
