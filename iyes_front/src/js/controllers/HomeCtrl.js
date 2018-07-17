/**
 * Created by For work on 09/07/2018.
 */
angular.module('helloWorldApp')
    .controller('HomeCtrl', [
        '$scope',
        function($scope) {
            console.log('Loaded.');
            $scope.message = 'Hello World Test jtm bb';
        }
    ]);
