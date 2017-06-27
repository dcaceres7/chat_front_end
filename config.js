(function() {
    "use strict";

    angular.module("AppProject").config(config);

    config.$inject = ["$stateProvider", "$urlRouterProvider"];

    function config($stateProvider, $urlRouterProvider) {
        setupRoutes($stateProvider, $urlRouterProvider);
    }

    function setupRoutes($stateProvider, $urlRouterProvider) {
        let templatesUrl = "";

        $stateProvider
            state("registration", {
                url: "/index.html",
                templateUrl: "index.html",
                controller: "registrationController as vm"
            })
    }

})();