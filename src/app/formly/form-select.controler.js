(function() {
    'use strict';

    angular
      .module('formlyTest')
      .controller('FormSelectController', FormSelectController);

    /** @ngInject */
    function FormSelectController(formlyVersion, $q, $http) {
      // FORMLY
      var vm = this,
          testData;

      testData = [
        {
          "id": 1,
          "label":"Option 1"
        },
        {
          "id": 2,
          "label":"Option 2"
        },
        {
          "id": 3,
          "label":"Option 3"
        }
      ];

      // funcation assignment
      vm.onSubmit = onSubmit;

      vm.env = {
        angularVersion: angular.version.full,
        formlyVersion: formlyVersion
      };

      vm.model = {
        "singleOption": null,
        "multipleOption": null,
        "singleOptionAsync": null
      };


      vm.options = {};

      vm.fields = [
        {
          key: 'singleOption',
          type: 'ui-select-single',
          templateOptions: {
            optionsAttr: 'bs-options',
            ngOptions: 'option[to.valueProp] as option in to.options | filter: $select.search',
            label: 'Single Select',
            valueProp: 'id',
            labelProp: 'label',
            placeholder: 'Select option',
            description: 'Template includes the allow-clear option on the ui-select-match element',
            options: testData
          }
        },
        {
          key: 'multipleOption',
          type: 'ui-select-multiple',
          templateOptions: {
            optionsAttr: 'bs-options',
            ngOptions: 'option[to.valueProp] as option in to.options | filter: $select.search',
            label: 'Multiple Select',
            valueProp: 'id',
            labelProp: 'label',
            placeholder: 'Select options',
            options: testData
          }
        },
        {
          key: 'singleOptionAsync',
          type: 'ui-select-single-search',
          templateOptions: {
            optionsAttr: 'bs-options',
            ngOptions: 'option[to.valueProp] as option in to.options | filter: $select.search',
            label: 'Async Search',
            valueProp: 'formatted_address',
            labelProp: 'formatted_address',
            placeholder: 'Search',
            options: [],
            refresh: refreshAddresses,
            refreshDelay: 0
          }
        }
      ];

      vm.originalFields = angular.copy(vm.fields);

      function refreshAddresses(address, field) {
        var promise;
        if (!address) {
          promise = $q.when({data: {results: []}});
        } else {
          var params = {address: address, sensor: false};
          var endpoint = '//maps.googleapis.com/maps/api/geocode/json';
          promise = $http.get(endpoint, {params: params});
        }
        return promise.then(function(response) {
          field.templateOptions.options = response.data.results;
        });
      }

      // function definition
      function onSubmit() {
        alert(vm.model.toJson(), null, 2);
      }
        // FORMLY

      }
    })();
