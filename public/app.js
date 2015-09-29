var app = angular.module('textSupport', ['ui.router', 'firebase']);

app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/')
        // STATES

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'views/home.html'
        })
        .state('support', {
            url: '/support',
            templateUrl: 'views/support.html',
            controller: 'supportCtrl'

        })
})