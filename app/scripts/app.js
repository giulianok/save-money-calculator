'use strict';


var MyApp = angular.module('SaveMoneyChallenge', [
    'ui.router',
    'ngMaterial'
]);


MyApp.run(function ($rootScope) {

    $rootScope.page = {
        title: 'Save Money Challenge',
        keywords: '',
        description: '',
        url: ''
    }

});

