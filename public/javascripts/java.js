var app = angular.module('Sonometro', []);

app.controller('MainCtrl', [
'$scope',
function($scope){
  $scope.test = 'Esta es una página web de prueba!';
  $scope.sounds = [{
    usuario: "sono1",
    sonido: 124,
    date: new Date()
  },
  {
    usuario: "sono2",
    sonido: 12345,
    date: new Date()
  }];
}]);
