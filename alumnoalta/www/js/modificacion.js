angular.module('starter.controllers')
	.controller("ModificacionCtrl", function($scope, $stateParams, $firebaseArray){
		$scope.titulo = "Modificar Alumno";
		$scope.icono = "ion-edit";
		$scope.boton = "button-calm";
		$scope.tarea = "modificar";

		var myDataRef = new Firebase("https://glowing-inferno-7786.firebaseio.com/alumnos");
		$scope.alumnos = $firebaseArray(myDataRef);
	});

	