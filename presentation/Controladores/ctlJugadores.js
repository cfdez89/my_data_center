/*Tecnologico de Costa Rica
 *Diseño de software
 *X-NBA MyDataCenter
 *Elaborado por Carlos Fernandez Jimenez
 *Octubre 2015 
 */
 
 /*Setter controlador jugadores
 * Define el controlador de la vista jugadores
 */
 
(function(){
	'use strict';
	angular
		.module('myDataCenter')
		.controller('ctlJugadores', [
			'$scope',
			'$location',
			'svsNavegacion',
			'svsManejadorJugadores',
			'svsCompartirJugador',
			'mensajeError',
			function($scope, $location, svsNavegacion, svsManejadorJugadores, svsCompartirJugador, mensajeError){
				$scope.jugadores = [];
				$scope.mdlTag   = "";
				$scope.filtrado = 0; 

				var cargarJugadores = function(){
					svsManejadorJugadores.obtenerJugadores().then(function(pResp){
                    	pResp.error ? mensajeError.mostrarError(): $scope.jugadores = pResp.parametros;	
					});
				};		
				    
				$scope.verPerfil = function(pId){
					svsCompartirJugador.setIdJugador(pId);
					$location.path('/jugador').replace();
				};
				
				cargarJugadores();
		}]);	
})();