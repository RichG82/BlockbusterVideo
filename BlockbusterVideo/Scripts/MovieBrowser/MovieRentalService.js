var movieRentalService = function ($http, $q) {

    var checkOut = function (movie) {
        movie.checkedOut = true;
        console.log("Movie Checked Out!  Info: " + movie.Title);
    }

    var checkIn = function (movie) {
        movie.checkedOut = false;
    }

    return {
        checkOut: checkOut,
        checkIn: checkIn
    }

}

angular.module('movieApp').service('MovieRentalService', ['$http', '$q', movieRentalService])