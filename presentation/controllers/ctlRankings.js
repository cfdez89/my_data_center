/*Tecnologico de Costa Rica
 *Diseño de software
 *X-NBA MyDataCenter
 *Elaborado por Carlos Fernandez Jimenez
 *Octubre 2015 
 */
 
 /*Controlador rankings
 * Define el controlador de la vista rankings
 */
(function(){
	//Controlador de la vista de rankings
	'use strict';
	angular
	    .module('myDataCenter')
	    .controller('ctlRankings', [
	        '$scope',
            'svsManejadorEstadisticas',
            'seasonsService',
            'notificationService',
    	    function($scope, svsManejadorEstadisticas, seasonsService, notificationService){
               
                $scope.temporadas = [];

    	    	$scope.rankings = {
    	    		juego: [],
    	    		social: []
    	    	};

    	    	$scope.parametrosBusqueda = {};

                var cargarTemporadas = function(){
                    seasonsService.obtenerTemporadas().then(function(pResp){
                        pResp.error ? notificationService.dangerMessage(): $scope.temporadas = pResp.parametros;  
                    });
                };

    	    	$scope.generarRankingJuego = function(pParametros){
                    var indice = document.getElementById("opcTemporadas");
                    pParametros.temporada = indice.options[indice.selectedIndex].text;
        
                    svsManejadorEstadisticas.obtenerEstadisticasJuegos(pParametros).then(function(pResp){
                        pResp.error ? notificationService.dangerMessage(): $scope.rankings.juego = pResp.parametros;  
                    });
                };

                $scope.generarRankingSocial = function(pParametros){
                    svsManejadorEstadisticas.obtenerEstadisticasSociales(pParametros).then(function(pResp){
                        pResp.error ? notificationService.dangerMessage(): $scope.rankings.social = pResp.parametros;  
                    });
                };

                cargarTemporadas();
    	
	    	}]);	
})();