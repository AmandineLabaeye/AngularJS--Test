var app = angular.module("MonApp", ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'menu.html'
        })
        .when('/ext', {
            templateUrl: 'extensions.html',
            controller: 'ExtensionsCtrl'
        })
        .when('/read', {
            templateUrl: 'read.html',
            controller: 'ReadClientCtrl'
        })
        .when('/add', {
            templateUrl: 'add.html',
            controller: 'AddClientCtrl'
        })
        .when('/edit/:id', {
            templateUrl: 'edit.html',
            controller: 'EditClientCtrl'
        })
        .when('/delete/:id', {
            templateUrl: 'delete.html',
            controller: 'DeleteClientCtrl'
        })
        .otherwise({
            redirectTo: '/'
        })
})