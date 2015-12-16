/// <reference path="../../node_modules/angular/angular.js" />

var movieBrowserService = function ($http, $q) {

    var getMovies = function(){
        var def = $q.defer();
        var result = $http({
            method: 'GET',
            url: '/api/Movies'
        }).then(function successCallback(response) {
            console.log(response.data);
            def.resolve(response.data);
        }, function errorCallback(response) {
            console.log(response.data);
            def.reject(response);
        });

        return def.promise;
    }

    var searchMovies = function (searchTerm, pageSize, pageNumber) {
        var def = $q.defer();
        var result = $http({
            method: 'GET',
            url: '/api/Movies/SearchMovies',
            params: {searchTerm: searchTerm, pageSize:pageSize, pageNumber:pageNumber}
        }).then(function successCallback(response) {
            console.log(response.data);
            def.resolve(response.data);
        }, function errorCallback(response) {
            console.log(response.data);
            def.reject(response);
        });

        return def.promise;
    }
    

    return {
        getMovies: getMovies,
        searchMovies: searchMovies
    }
}

angular.module('movieApp').service('MovieBrowserService', ['$http','$q', movieBrowserService])