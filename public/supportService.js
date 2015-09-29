var app = angular.module('textSupport');

app.service('supportService', function($http) {
    this.sendStuff = function(message, num) {
        return $http({
            method: 'POST',
            url: 'http://localhost:5000/support/messages/',
            data: {
                message: message,
                to: num
            }
        })
    }
})