var AdeM = angular.module("AdeM", ["ngRoute"]);

AdeM.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "views/home.html",
        controller: "homeCtrl"
    })
    .when("/whatwedo", {
        templateUrl : "views/whatwedo.html"
    })
    .when("/howtohelp", {
        templateUrl : "views/howtohelp.html"
    })
    .when("/timelines", {
        templateUrl : "views/timelines.html"
    });
});

AdeM.controller("homeCtrl", function($scope){
    $('.carousel').carousel({
        interval: 4000 //changes the speed
    })
    
});

AdeM.controller("activeCtrl", function($scope, $rootScope, $location){
   $rootScope.location = $location;
});

