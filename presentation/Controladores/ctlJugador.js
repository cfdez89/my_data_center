/*Tecnologico de Costa Rica
 *Diseño de software
 *X-NBA MyDataCenter
 *Elaborado por Carlos Fernandez Jimenez
 *Octubre 2015 
 */
 
 /*Setter controlador jugador
 * Define el controlador de la vista jugador
 */
(function(){
	'use strict';
	angular
		.module('myDataCenter')
		.controller('ctlJugador', [
			'$scope',
			'svsManejadorJugadores',
			'svsCompartirJugador',
			'svsManejadorEstadisticas',
			'mensajeError',
			function($scope, svsManejadorJugadores, svsCompartirJugador, svsManejadorEstadisticas, mensajeError){
		        $scope.jugador      = [];
		        $scope.estadisticas = {};

                var cargarPerfilJugador = function(){
                	svsManejadorJugadores.obtenerJugador(svsCompartirJugador.getIdJugador()).then(function(pResp){
                        pResp.error ? mensajeError.mostrarError(): $scope.jugador = pResp.parametros;		
	                });
                };

                var cargarEstadisticasTempReg = function(){
                	svsManejadorJugadores.obtenerTempRegularJugador(svsCompartirJugador.getIdJugador()).then(function(pResp){
                        pResp.error ? mensajeError.mostrarError(): $scope.estadisticas.regular = pResp.parametros;		
	                });
                };

                var cargarEstadisticasTempPost = function(){
                	svsManejadorJugadores.obtenerTempPosteriorJugador(svsCompartirJugador.getIdJugador()).then(function(pResp){
                        pResp.error ? mensajeError.mostrarError(): $scope.estadisticas.posterior = pResp.parametros;		
	                });
                };
				
				cargarPerfilJugador();
				cargarEstadisticasTempReg();
				cargarEstadisticasTempPost();
		}]);	
})();