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
        '  ng-messages="fc.$error">{{options.validation}}',
        '  <div ng-message="{{::name}}" ngrepeat="(name, message) in ::options.validation.messages">',
        '    {{message(fc.$viewValue, fc.$modelValue, this)}}',
        '  </div>',
        '</div>'
      ].join(' ')
    }]);
    //FORMLY END
  }

})();
