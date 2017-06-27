(function() {
    'use strict';
    var app = angular
        .module('AppProject');
    app.
    factory('requestsService', requestsService);
    requestsService.$inject = [
        '$http',
        '$location',
        'toaster'
    ];

    function requestsService($http, $location, toaster) {
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
            createUser: function(userData, success) {
                $http.post(url + "auth/register", JSON.stringify(userData)).then(success).catch(errorCallback);
            }
        };
    };
})();