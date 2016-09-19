/*Tecnologico de Costa Rica
 *Diseño de software
 *X-NBA MyDataCenter
 *Elaborado por Carlos Fernandez Jimenez
 *Octubre 2015 
 */
 
 /*Setter controlador jugador
 * Define el controlador de la vista jugador
 */
(function() {
    'use strict';

	function playerCtl($scope, svsManejadorJugadores, svsCompartirJugador, svsManejadorEstadisticas, mensajeError) {
		var vm           = this;
        vm.jugador       = [];
        vm.estadisticas = {};

        var getPlayerProfile = function() {
	        svsManejadorJugadores.obtenerJugador(svsCompartirJugador.getIdJugador()).then(function(response) {
	        	response.status ? vm.jugador = response.data: mensajeError.mostrarError();		
            });
        };

        var getRegTemStatistics = function() {
	        svsManejadorJugadores.obtenerTempRegularJugador(svsCompartirJugador.getIdJugador()).then(function(response) {
	        	response.status ? vm.estadisticas.regular = response.data: mensajeError.mostrarError();		
            });
        };

        var getPostTemStatistics = function() {
	        svsManejadorJugadores.obtenerTempPosteriorJugador(svsCompartirJugador.getIdJugador()).then(function(response) {
	        	response.status ? vm.estadisticas.posterior = response.data: mensajeError.mostrarError();		
            });
        };

        getPlayerProfile();
        getRegTemStatistics();
        getPostTemStatistics();
    };

    angular
        .module('myDataCenter')
        .controller('playerCtl', playerCtl);			
})();