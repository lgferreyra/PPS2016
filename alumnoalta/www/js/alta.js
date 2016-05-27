angular.module('starter')
	.controller("AltaCtrl", function($scope, $stateParams, $ionicPopup, $cordovaVibration, $cordovaGeolocation, $firebaseArray){
		$scope.titulo = "Ingresar Alumno";
		$scope.alumno = {
			nombre : "",
			apellido : "",
			legajo : null,
			nacimiento : null,
			documento : null,
			email : "",
			telefono : "",
			geo: null,
			imagen: null
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
			  		$scope.alumno = {
						nombre : "",
						apellido : "",
						legajo : null,
						nacimiento : null,
						documento : null,
						email : "",
						telefono : "",
					};
				},function(){
					$ionicPopup.alert({
			    	title: 'Información',
			    	template: 'Falló la sincronización'
			  		});
				});
			};
		};

		function validarDatos(){
			console.log	($scope.alumno);
			if($scope.alumno.nombre == "" || $scope.alumno.apellido == "" || $scope.alumno.legajo == null ||
				$scope.alumno.nacimiento == null || $scope.alumno.documento == null) 
			{
				$cordovaVibration.vibrate(300);
				$ionicPopup.alert({
			    title: 'Atención',
			    template: 'Verifique los campos'
			  	});
			}
			else {return true};
		};

		$scope.geolocalizar = function(){

			var posOptions = {timeout: 10000, enableHighAccuracy: false};
  			$cordovaGeolocation.getCurrentPosition(posOptions)
		    .then(function (position) {
		      	/*var lat  = position.coords.latitude
		      	var long = position.coords.longitude*/
		      	$scope.alumno.geo =  {lat:position.coords.latitude, lon:position.coords.longitude};
		      	$ionicPopup.alert({
			    title: 'Atención',
			    template: 'estoy en lat:' + $scope.alumno.geo.lat + ' y long: ' + $scope.alumno.geo.lon
			  	});
		    }, function(err) {
				$ionicPopup.alert({
			    title: 'Atención',
			    template: err
			  	});
		    });
		};
});

/*
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
	});*/