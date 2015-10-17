(function() {
  'use strict';

  angular
    .module('formlyTest')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, formlyConfig, formlyValidationMessages) {

    formlyConfig.setWrapper({
      name: 'validation',
      types: ['input', 'customInput'],
      templateUrl: 'my-messages.html'
    });

    formlyValidationMessages.addStringMessage('required', 'Pole wymagane!');

    // formlyConfig.setType({
    //   name: 'input',
    //   template: '<input ng-model="[options.key]" />'
    // });

    $log.debug('runBlock end');
  }

})();
