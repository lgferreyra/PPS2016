angular.module('starter.controllers')
	.controller("AltaCtrl", function($scope, $stateParams, $ionicPopup, $cordovaVibration){
		$scope.titulo = "Ingresar Alumno";
		$scope.alumno = {};
		$scope.alumno.nombre = "";
		$scope.alumno.apellido = "";
		$scope.alumno.legajo = null;
		$scope.alumno.nacimiento = null;
		$scope.alumno.documento = null;
		$scope.alumno.email = "";
		$scope.alumno.telefono = "";


		$scope.enviarDatos=function(){
			if (validarDatos()) {

			};
		};

		function validarDatos(){
			console.log	($scope.alumno);
			if($scope.alumno.nombre == "" || $scope.alumno.apellido == "" || $scope.alumno.legajo == null ||
				$scope.alumno.nacimiento == null || $scope.alumno.documento == null) 
			{
				$cordovaVibration.vibrate(150);
				
				var alertPopup = $ionicPopup.alert({
			    title: 'Atención',
			    template: 'Verifique los campos'
			  	});

			   	alertPopup.then(function(res) {
			    console.log('Error en los campos');
			   	});
			}
			else {return true};
		};
	});