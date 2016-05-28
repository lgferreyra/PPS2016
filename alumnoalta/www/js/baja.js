angular.module('starter.controllers')
	.controller("BajaCtrl", function($scope, $stateParams, $firebaseArray, $ionicPopup){
		$scope.titulo = "Eliminar Alumno";
		$scope.icono = "ion-close";
		$scope.boton = "button-assertive";

		var myDataRef = new Firebase("https://glowing-inferno-7786.firebaseio.com/alumnos");
		$scope.alumnos = $firebaseArray(myDataRef);


		$scope.accionarAlumno = function(idalumno) {

   			var confirmPopup = $ionicPopup.confirm({
     			title: 'Atención',
     			template: 'Desea eliminar este registro?'
   			});

   			confirmPopup.then(function(res) {
     		if(res) {
     			$scope.alumnos.$remove(idalumno).then(
				function(){
					$ionicPopup.alert({
			    	title: 'Información',
			    	template: 'Registro eliminado correctamente'
			  		});
				},function(){
					$ionicPopup.alert({
			    	title: 'Información',
			    	template: 'Ocurrió un error al intentar eliminar'
			  		});
				});
     		} else {
       		console.log('You are not sure');
     		}
   			});
 		};
	});

	