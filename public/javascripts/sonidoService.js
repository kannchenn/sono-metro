angular.module('sonidoService', [])
// each function returns a promise object
.factory('Sonidos', function($http) {
    return {
        get : function() {
            return $http.get('/sonidos');
        }
    }
});
