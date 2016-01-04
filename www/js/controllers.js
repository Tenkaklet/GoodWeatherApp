"use strict";
angular.module('app.controllers', [])

.controller('homeCtrl',['$scope','$http','$log','$ionicLoading','$timeout', function($scope, $http, $log, $ionicLoading, $timeout) {

    var FindMe = document.getElementById('FindMe');
    $timeout(function(){
        var Find = document.getElementById('Find').className += ' animated fadeIn';
        $scope.Find = true;
    }, 500);
    $timeout(function(){
        var Second = document.getElementById('Second').className += ' animated fadeIn';
        $scope.Second = true;
    }, 1400);

    $scope.getGeolocation = function () {
        navigator.geolocation.getCurrentPosition(function (pos) {
            var latitude = pos.coords.latitude;
            var longitude = pos.coords.longitude;
            $scope.position = latitude + ',' + longitude;
            $log.info($scope.position);
        });
        FindMe.remove();
        $timeout(function () {

            $scope.weatherResult = true;
        }, 4000);

    };


}])
.controller('weatherCtrl',['$scope','$http','$log','$stateParams','$ionicLoading','$timeout','getWeather', function($scope, $http, $log, $stateParams, $ionicLoading, $timeout, getWeather) {
    $ionicLoading.show({
        template: 'Getting Your Weather'
    });

    $scope.position = $stateParams.position;
    $log.info($stateParams.position);

    getWeather.findPlace($scope.position)
    .then(function (response) {
        $log.info(response);
        // set "global" of response data
        var weatherData = response;
        //City name
        $scope.city = weatherData.current_observation.display_location.city;
        // City time
        $scope.time = weatherData.current_observation.local_time_rfc822;
        //slicing the time data from weatherData
        var splice = $scope.time.slice(16,22);
        //show time of location
        $scope.time = splice;
        //Icon
        $scope.icon = weatherData.current_observation.icon_url;
        //short description of weather from weather api
        $scope.shortDescription = weatherData.current_observation.weather;
        //Celcius
        $scope.celcius = weatherData.current_observation.feelslike_c;
        //Farenheit
        $scope.farenheit = weatherData.current_observation.feelslike_f;
        //wind speed
        $scope.windSpeed = weatherData.current_observation.wind_kph;
        // wind direction
        $scope.windDirection = weatherData.current_observation.wind_dir;
        // humidity
        $scope.humidity = weatherData.current_observation.relative_humidity;
        // visibility
        $scope.visibility = weatherData.current_observation.visibility_km;
        $ionicLoading.hide();
    });


}])
.controller('fourCtrl',['$scope','$http','$log','$stateParams','$ionicLoading','$timeout','getWeather', function($scope, $http, $log, $stateParams, $ionicLoading, $timeout, getWeather) {
    $scope.position = $stateParams.position;
    $log.info($stateParams.position);
    getWeather.findPlace($scope.position)
    .then(function(response) {
        // set "global" of response data
        var weatherData = response;
        //City name
        $scope.city = weatherData.current_observation.display_location.city;
        // City time
        $scope.time = weatherData.current_observation.local_time_rfc822;
        //slicing the time data from weatherData
        var splice = $scope.time.slice(16,22);
        //show time of location
        $scope.time = splice;
        var forecastData = response.forecast;
        // $log.info(forecastData);
        $scope.forecastDay = forecastData.simpleforecast.forecastday;
        $log.info($scope.forecastDay);
    });



}]);
