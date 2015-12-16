/// <reference path="../../node_modules/angular/angular.js" />
/// <reference path="MovieBrowserService.js" />

var movieBrowserController = function ($scope, movieBrowserService) {

    $scope.searchTerm_changed = function () {
        movieBrowserService.searchMovies($scope.searchTerm, 50, 0).then(function (data) {
            $scope.movies = data;
        });

        console.log("changed.")
    }

}

angular.module('movieApp').controller('MovieBrowserController', ['$scope', 'MovieBrowserService', movieBrowserController]);