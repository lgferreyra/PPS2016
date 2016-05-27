angular.module('starter.controllers')
	.controller("listaCtrl", function($scope, $stateParams, $ionicPopup, $firebaseArray){

		var myDataRef = new Firebase("https://glowing-inferno-7786.firebaseio.com/alumnos");
		$scope.alumnos = $firebaseArray(myDataRef);

		console.log($scope.alumnos);
		
});