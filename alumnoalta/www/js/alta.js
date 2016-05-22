angular.module('starter.controllers')
	.controller("AltaCtrl", function($scope, $stateParams, $ionicPopup, $cordovaVibration, $firebaseArray){
		$scope.titulo = "Ingresar Alumno";
		$scope.alumno = {
			nombre : "",
			apellido : "",
			legajo : null,
			nacimiento : null,
			documento : null,
			email : "",
			telefono : "",
		};
		
		var myDataRef = new Firebase("https://glowing-inferno-7786.firebaseio.com/alumnos");


		$scope.enviarDatos=function(){
			if (validarDatos()) {
				var fecha = $scope.alumno.nacimiento;
				$scope.alumno.nacimiento = {
					dia:fecha.getDate(),
					mes:fecha.getMonth() + 1,
					año:fecha.getFullYear(),
				}
				var dataSyncArray = $firebaseArray(myDataRef);
				dataSyncArray.$add($scope.alumno)
				.then(function(){
					$ionicPopup.alert({
			    	title: 'Información',
			    	template: 'Envío de datos correctamente'
			  		});
				},function(){

				});
			};
		};

		function validarDatos(){
			console.log	($scope.alumno);
			if($scope.alumno.nombre == "" || $scope.alumno.apellido == "" || $scope.alumno.legajo == null ||
				$scope.alumno.nacimiento == null || $scope.alumno.documento == null) 
			{
				$cordovaVibration.vibrate(150);
				
				$ionicPopup.alert({
			    title: 'Atención',
			    template: 'Verifique los campos'
			  	});
			}
			else {return true};
		};
	});