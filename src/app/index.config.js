(function() {
  'use strict';

  angular
    .module('formlyTest')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig, formlyConfigProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;

    //Formly
    formlyConfigProvider.setWrapper([{
      template: [
        '<formly-transclude></formly-transclude>',
        '<div class="validation"',
        '  ng-if="showError"',
        '  ng-messages="fc.$error">',
        '  <div ng-message="{{::name}}" ngrepeat="(name, message) in ::options.validation.messages">',
        '    {{message(fc.$viewValue, fc.$modelValue, this)}}',
        '  </div>',
        '</div>'
      ].join(' ')
    }]);

    formlyConfigProvider.extras.removeChromeAutoComplete = true;

    // Configure custom types
    formlyConfigProvider.setType({
      name: 'async-ui-select',
      extends: 'select',
      templateUrl: 'async-ui-select-type.html'
    });

    formlyConfigProvider.setType({
      name: 'ui-select-single',
      extends: 'select',
      templateUrl: 'ui-select-single.html'
    });
    formlyConfigProvider.setType({
      name: 'ui-select-single-select2',
      extends: 'select',
      templateUrl: 'ui-select-single-select2.html'
    });
    formlyConfigProvider.setType({
      name: 'ui-select-single-search',
      extends: 'select',
      templateUrl: 'ui-select-single-async-search.html'
    });

    formlyConfigProvider.setType({
      name: 'ui-select-multiple',
      extends: 'select',
      templateUrl: 'ui-select-multiple.html'
    });

    formlyConfigProvider.setType({
      name: 'ui-select',
      extends: 'select',
      template: '<ui-select ng-model="model[options.key]" theme="bootstrap" ng-required="{{to.required}}" ng-disabled="{{to.disabled}}" reset-search-input="false"> <ui-select-match placeholder="{{to.placeholder}}"> {{$select.selected[to.labelProp || \'name\']}} </ui-select-match> <ui-select-choices group-by="to.groupBy" repeat="option[to.valueProp || \'value\'] as option in to.options | filter: $select.search"> <div ng-bind-html="option[to.labelProp || \'name\'] | highlight: $select.search"></div> </ui-select-choices> </ui-select>'
    });

    formlyConfigProvider.setType({
      name: 'ui-select-select2',
      extends: 'ui-select',
      template: '<ui-select ng-model="model[options.key]" theme="select2" ng-required="{{to.required}}" ng-disabled="{{to.disabled}}" reset-search-input="false"> <ui-select-match placeholder="{{to.placeholder}}"> {{$select.selected[to.labelProp || \'name\']}} </ui-select-match> <ui-select-choices group-by="to.groupBy" repeat="option[to.valueProp || \'value\'] as option in to.options | filter: $select.search"> <div ng-bind-html="option[to.labelProp || \'name\'] | highlight: $select.search"></div> </ui-select-choices> </ui-select>'
    });

    formlyConfigProvider.setType({
      name: 'ui-select-selectize',
      extends: 'ui-select',
      template: '<ui-select ng-model="model[options.key]" theme="selectize" ng-required="{{to.required}}" ng-disabled="{{to.disabled}}" reset-search-input="false"> <ui-select-match placeholder="{{to.placeholder}}"> {{$select.selected[to.labelProp || \'name\']}} </ui-select-match> <ui-select-choices group-by="to.groupBy" repeat="option[to.valueProp || \'value\'] as option in to.options | filter: $select.search"> <div ng-bind-html="option[to.labelProp || \'name\'] | highlight: $select.search"></div> </ui-select-choices> </ui-select>'
    });
    //FORMLY END
  }

})();
