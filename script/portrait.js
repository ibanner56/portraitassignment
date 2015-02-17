/**
 * Created by Isaac on 2/4/2015.
 */

"use strict";

(function() {
    var app = angular.module('portraitPage', ['ngAnimate']);
    app.controller('PortraitController', ['$scope', '$http', '$timeout', function($scope, $http, $timeout) {
        $scope.bios = [];
        $scope.activeBio = 0;
        $scope.activeImage = 0;
        $scope.rootIndex = 0;

        $http.get('./bios.json').success(function(data) {
            $scope.bios = data;
            console.log($scope.bios);
        });

        $scope.setBio = function(index) {
            $scope.activeBio = index;
        };

        $scope.showBio = function(index) {
            return (index == $scope.activeBio);
        };

        $scope.setImg = function(index) {
            $scope.activeImage = index;
        };

        $scope.showImg = function(index) {
            return (index == $scope.activeImage);
        };

        $scope.set = function(index) {
            $scope.activeBio = index;
            $scope.setImg(index);
            $timeout(function() {
                $scope.setImg($scope.rootIndex);
                $scope.setBio($scope.rootIndex);
            }, 5000);
        }

    }]);
})();