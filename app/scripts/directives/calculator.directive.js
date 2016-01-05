MyApp.directive('calculator', function () {
    return {
        restrict: 'E',
        controller: 'calculator.controller',
        templateUrl: 'calculator.template.html',
        link: function () {
        }
    }
})