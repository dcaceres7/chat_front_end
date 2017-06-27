(function() {
    "use strict";

    angular.module("AppProject").controller("registrationController", registrationController);
    registrationController.$inject = ['$state', 'requestsService', 'toaster'];

    function registrationController($state, requestsService, toaster) {
        var vm = this;
        requestsService.getLanguage(function(response) {
            response.data.forEach(function(element) {
                vm.languages.buffer.push({
                    name: element.NAME,
                    id: element.id,
                    _lowername: element.NAME.toLowerCase()
                });
            });
        });

        vm.inputsForm = [{
            name: 'Name',
            value: '',
            type: 'text'
        }, {
            name: 'Username',
            value: '',
            type: 'text'
        }, {
            name: 'Email ',
            value: '',
            type: 'email'
        }, {
            name: 'Password',
            value: '',
            type: 'password'
        }, {
            name: 'Password Confirm',
            value: '',
            type: 'password'
        }];

        vm.button = {
            name: 'Register',
            onClick: function() {
                let obj = {
                    "realm": vm.inputsForm[0].value,
                    "email": vm.inputsForm[2].value,
                    "password": vm.inputsForm[3].value,
                    "username": vm.inputsForm[1].value
                }
                requestsService.createUser(obj, function(response) {
                    vm.languages.values.forEach(function(element, index) {
                        requestsService.userLanguage({
                            USERID: response.data.id
                        }, function(response) {
                            toaster.pop({
                                type: 'success',
                                title: "Success",
                                body: "User registered successfully",
                                showCloseButton: true
                            });
                        });
                    });
                });
            }
        }
    }
})();