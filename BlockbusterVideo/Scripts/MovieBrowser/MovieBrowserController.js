/// <reference path="../../node_modules/angular/angular.js" />
/// <reference path="MovieBrowserService.js" />

var movieBrowserController = function ($scope, movieBrowserService, movieRentalService) {

    $scope.checkedOutItems = [];

    $scope.searchTerm_changed = function () {
        movieBrowserService.searchMovies($scope.searchTerm, 10, 0).then(function (data) {
            $scope.checkedOutItems.forEach(function (item) {
                data.forEach(function (searchItem) {
                    if (item.ID == searchItem.ID) {
                        searchItem.checkedOut = true;
                    }
                });
                
            });
            $scope.movies = data;
        });

        console.log("changed.")
    }

    $scope.checkOut = function (scope, movie) {
        var elem = event.currentTarget || event.srcElement
        movieRentalService.checkOut(movie);

        
        $scope.checkedOutItems.push(movie);
    }

    $scope.checkIn = function (scope, movie) {
        movieRentalService.checkIn(movie);
        console.log('checkin')
    }

}

angular.module('movieApp').controller('MovieBrowserController', ['$scope', 'MovieBrowserService', 'MovieRentalService', movieBrowserController]);