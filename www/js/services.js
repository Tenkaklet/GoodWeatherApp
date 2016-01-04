"use strict";
angular.module('app.services', [])

.factory('getWeather', ['$http',function($http){
    var apiKey = 'a78c790e1d521c53';
    var locate = function(location) {
        var weatherURl = 'http://api.wunderground.com/api/' + apiKey + '/forecast/conditions/q/' + location + '.json?';
        return $http.get(weatherURl)
        .then(function(response){
            return response.data;
            // console.log('weatherData');
            // console.log(weatherData);
            // console.log('data');
            // console.log(data);
        });
    };
    return {
        findPlace: function (location) {
            return locate(location);
        }
    };
}])

.service('blankService', [function(){

}]);
