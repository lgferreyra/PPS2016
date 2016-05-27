angular.module('starter.controllers')
	.controller("BajaCtrl", function($scope, $stateParams, $firebaseArray){
		$scope.titulo = "Eliminar Alumno";
		$scope.icono = "ion-close";
		$scope.boton = "button-assertive";

		var myDataRef = new Firebase("https://glowing-inferno-7786.firebaseio.com/alumnos");
		$scope.alumnos = $firebaseArray(myDataRef);
	});

	