var app = angular.module('flapperNews', []);

app.controller('MainCtrl', [
'$scope',
function($scope){
  $scope.test = 'Hello world!';
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