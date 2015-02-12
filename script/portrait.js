/**
 * Created by Isaac on 2/4/2015.
 */

"use strict";

(function() {
    var app = angular.module('portraitPage', ['ngAnimate']);
    app.controller('PortraitController', ['$scope', '$http', function($scope, $http) {
        $scope.bios = [];
        $scope.activeBio = 0;

        $http.get('./bios.json').success(function(data) {
            $scope.bios = data;
            console.log($scope.bios);
        });

        $scope.show = function(index) {
            return (index == $scope.activeBio);
        }

        $scope.set = function(index) {
            $scope.activeBio = index;
        }

    }]);
})();