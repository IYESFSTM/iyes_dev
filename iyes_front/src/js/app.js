/**
 * Created by For work on 09/07/2018.
 */
angular.module('helloWorldApp', [
        'ngRoute'
    ])
    .config([
        '$routeProvider',
        function($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'views/home.html',
                    controller: 'HomeCtrl'
                });
        }
    ]);
