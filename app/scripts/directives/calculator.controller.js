MyApp.controller('calculator.controller', function ($scope, $mdDialog) {

    var current = 10;
    var self = this;

    $scope.flag = {};
    $scope.week = {
        current: current,
        total: 54,
        inArray: [],
        selected: current
    };
    $scope.deposit = {
        min: 1,
        max: 52
    }
    $scope.days = [];

    // Convert fix number to array
    // Filling the days (7)
    // Memory: O(n)
    for (var i = 1; i <= $scope.week.total; i++) {
        $scope.week.inArray.push(i);
        switch (i) {
            case 1: $scope.days.push('Monday'); break;
            case 2: $scope.days.push('Tuesday'); break;
            case 3: $scope.days.push('Wednesday'); break;
            case 4: $scope.days.push('Thursday'); break;
            case 5: $scope.days.push('Friday'); break;
            case 6: $scope.days.push('Saturday'); break;
            case 7: $scope.days.push('Sunday'); break;
        }
    }

    /* MOVED TO ANOTHER FOR TO REDUCE FORS
        // Filling the days (7)
        // O(n)
        for (var i = 1; i <= 7; i++) {
            switch (i) {
                case 1: $scope.days.push('Monday');
                case 2: $scope.days.push('Tuesday');
                case 3: $scope.days.push('Wednesday');
                case 4: $scope.days.push('Thursday');
                case 5: $scope.days.push('Friday');
                case 6: $scope.days.push('Saturday');
                case 7: $scope.days.push('Sunday');
            }
        }
    */


    $scope.showAlert = function(ev) {
        $mdDialog.show(
            $mdDialog.alert()
                .parent(angular.element(document.querySelector('#popupContainer')))
                .clickOutsideToClose(true)
                .title('What "Change the amount" means?')
                .textContent('The original 52 Week Save Money Challenge uses the number of the week as the value of the deposit, it means the first week you should deposit $1 and the last week of the year (number 52) you should deposit $52. You can change the min ($1) and max ($52) for the best values based on your income.')
                .ok('Got it!')
                .targetEvent(ev)
        );
    };


    $scope.clearForm = function () {
        $scope.startsaving = 'beginning';
        self.startsaving = 'beginning';
        $scope.changeamount = 'no';
        $scope.depositDay = $scope.days[0];
    };

    $scope.calculateForm = function () {
        console.log($scope);
        console.log(self);
    };

    $scope.init = function () {
        $scope.clearForm();
    };

    $scope.init();



});