var app = angular.module('textSupport');

app.controller('supportCtrl', function($scope, $firebaseObject, supportService) {
    $scope.numbers = $firebaseObject(new Firebase('https://billystextsupport.firebaseio.com/numbers'));


    $scope.sendStuff = function (message, number) {
        supportService.sendStuff(message, number).then(function (response) {
            $scope.newMessage = '';
        })
    }
})