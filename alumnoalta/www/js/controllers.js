angular.module('starter.controllers', [])

.controller('AppCtrl', ['$scope', 'ionicToast','$ionicModal', '$timeout', '$cordovaFlashlight',function($scope, $firebaseArray, $firebaseObject, ionicToast, $ionicModal, $timeout, $cordovaFlashlight) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.linterna = function() {
    /*var mensaje;
    if($cordovaFlashlight.isSwitchedOn())
    {
      mensaje = "Linterna apagada";
    }
    else
    {
      mensaje = "Linterna Encendida";
    }*/
    //mostrarMensaje('linterna', 'middle', false,2000);
    $cordovaFlashlight.toggle()/*
      .then(function (success) { mostrarMensaje(mensaje, 'middle', false,2000);},
        function (error) { mostrarMensaje("Ha ocurrido un problema", 'middle', false,2000); })*/;
  };

 function mostrarMensaje(mensaje,posicion,cierreAutomatico,duracion){ 
 // <!-- ionicToast.show(message, position(top, middle, bottom), stick(true or false), time); -->
  ionicToast.show(mensaje, posicion, cierreAutomatico, duracion);
 };

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
}] )

.controller('GestionCtrl', function($scope) {
  $scope.operaciones = [
    { title: 'Alta', url: 'new', icon: 'ion-person-add'},
    { title: 'Baja', url: 'delete', icon: 'ion-close'},
    { title: 'Modificación', url: 'edit', icon: 'ion-edit' },
  ];
});
