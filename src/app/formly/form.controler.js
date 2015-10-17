(function() {
    'use strict';

    angular
      .module('formlyTest')
      .controller('FormController', FormController);

    /** @ngInject */
    function FormController() {
      var vm = this;

      vm.formConfirm = formConfirm;

      // FORMLY
      vm.user = {};

      // note, these field types will need to be
      // pre-defined. See the pre-built and custom templates
      // http://docs.angular-formly.com/v6.4.0/docs/custom-templates
      vm.userFields = [{
          key: 'email',
          type: 'input',
          templateOptions: {
            type: 'email',
            label: 'Email address',
            placeholder: 'Enter email'
          }
        }, {
          key: 'password',
          type: 'input',
          templateOptions: {
            type: 'password',
            label: 'Password',
            minlength: 6,
            required: true,
            placeholder: 'Password'
          },
          validation: {
            messages: {
              required: 'to.label + " jest wymagane"',
              minlength: 'to.label + " minimum 6 znaków"'
            }
          }
        }, {
          key: 'checked',
          type: 'checkbox',
          templateOptions: {
            label: 'Check me out'
          }
        }, {
          key: 'ipAddress',
          type: 'input',
          templateOptions: {
            label: 'IP Address',
            placeholder: '127.0.0.1'
          },
          validators: {
            ipAddress: {
              expression: function(viewValue, modelValue) {
                var value = modelValue || viewValue;
                return !value || /(\d{1,3}\.){3}\d{1,3}/.test(value);
              },
              message: '$viewValue + " is not a valid IP Address"'
            }
          }
        }
        ];
        // FORMLY

        function formConfirm() {

        }

      }
    })();
