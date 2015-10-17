var app = angular.module('flapperNews', ['ui.router'])
.config([
    '$stateProvider',
    '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: '/home.html',
                controller: 'MainCtrl'
        })
            .state('posts', {
                url: '/posts/{id}',
                templateUrl: '/posts.html',
                controller: 'PostsCtrl'
        });
        
        $urlRouterProvider.otherwise('home');
    }
]);

app.factory('posts', [function () {
    var o = {
        posts: []
    };
    
    return o;
}]);
