'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ComponentenCtrl
 * @description
 * # ComponentenCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('ComponentenCtrl', function ($scope, Component) {
        $scope.components = Component.getList().$object;

        $scope.dragElem = {title: 'AngularJS - Drag Me'};
        $scope.dropElem = {};

        $scope.dropSignal = 'alert alert-info';

		$scope.onOver = function(event, ui) {
    		console.log('hey: ',event, ui);
        $scope.dropSignal = 'alert alert-success';
        $scope.$apply();
		};

    $scope.onOut = function(event, ui) {
      console.log('hey: ',event, ui);
      $scope.dropSignal = 'alert alert-info';
      $scope.$apply();
    };

    $scope.startCallback = function(event, ui, dragElem) {
		    console.log('You started draggin: ', dragElem);
		    $scope.draggedTitle = 'the';
        $scope.dropSignal = 'alert alert-warning';
        $scope.$apply();
    };

  });
