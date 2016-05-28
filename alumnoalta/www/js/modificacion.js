angular.module('starter.controllers')
	.controller("ModificacionCtrl", function($scope, $stateParams, $firebaseArray){
		$scope.titulo = "Modificar Alumno";
		$scope.icono = "ion-edit";
		$scope.boton = "button-calm";

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
				},function(rta){
					console.log(rta);
					$ionicPopup.alert({
			    	title: 'Información',
			    	template: 'Ocurrió un error al intentar eliminar' + rta
			  		});
				});
     		} else {
       		console.log('You are not sure');
     		}
   			});
 		};
	});

	