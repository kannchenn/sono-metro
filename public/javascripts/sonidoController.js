angular.module('sonidoController', [])
.controller('MainCtrl', function($scope, $http, Sonidos) {
  Sonidos.get().success(function(data) {
    console.log("Resultado get:", data);
    $scope.sounds = data;
  });
});