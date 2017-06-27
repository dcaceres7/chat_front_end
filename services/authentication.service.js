(function() {
    'use strict';
    var app = angular
        .module('AppProject');
    app.
    factory('authenticationService', authenticationService);
    authenticationService.$inject = [
        '$http',
        '$location',
        'toaster',
        '$cookieStore',
        '$rootScope'
    ];

    function authenticationService($http, $location, toaster, $cookieStore, $rootScope) {
        var url = "http://localhost:8080/api/";

        function errorCallback(response) {
            toaster.pop({
                type: 'error',
                title: response.data.error.name,
                body: response.data.error.message,
                showCloseButton: true
            });
        }
        return {
            confirmEmail: function(uid, token, successCallback) {
                $http.get(url + 'USERS/confirm?uid=' + uid + '&token=' + token).then(successCallback)
                    .catch(errorCallback);
            },
            login: function(email, password, successCallback) {
                $http.post(url + 'USERS/login', JSON.stringify({
                    email: email,
                    password: password
                }))
                    .then(successCallback)
                    .catch(function() {
                        toaster.pop({
                            type: 'error',
                            title: 'Inicio de sesion fallido',
                            body: 'No se pudo iniciar sesion correctamente',
                            showCloseButton: true
                        });
                    });
            },
            setCredentials: function(token) {
                $rootScope.globals.token = token;  
                $http.defaults.headers.common['Authorization'] = token;       
                $cookieStore.put('globals', $rootScope.globals);
            },
            clearCredentials: function() {
                $rootScope.globals = {};        
                $cookieStore.remove('globals');        
                $http.defaults.headers.common.Authorization = 'Basic';
            },
            logout: function() {
                window.localStorage['Session'] = "";
                $http.post(url + 'USERS/logout?access_token=' + $rootScope.globals.token).then(function() {
                    $location.path('/login');
                }).catch(errorCallback);
            },
            getUser: function(success) {
                $http.get(url + "USERS/" + $rootScope.Session).then(success).catch(errorCallback);
            }
        };
    };
})();