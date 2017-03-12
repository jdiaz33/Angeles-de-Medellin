var AdeM = angular.module("AdeM", ["ngRoute"]);

AdeM.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "views/home.html",
        controller: "homeCtrl"
    })
    .when("/red", {
        templateUrl : "views/red.html"
    })
    .when("/green", {
        templateUrl : "green.htm"
    })
    .when("/blue", {
        templateUrl : "blue.htm"
    });
});

AdeM.controller("homeCtrl", function($scope){
    $('.carousel').carousel({
        interval: 4000 //changes the speed
    })
    
});