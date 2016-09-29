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

    function playerCtl(sharePlayerService, svsManejadorJugadores, svsManejadorEstadisticas, mensajeError) {
        var vm          = this;
        vm.playerId     = -1;
        vm.jugador      = [];
        vm.estadisticas = {};
        
        var setPlayerId = function() {
            vm.playerId = sharePlayerService.getIdJugador();
        };

        var setPlayerProfile = function() {
	        svsManejadorJugadores.obtenerJugador(vm.playerId).then(function(response) {
	        	response.status ? vm.jugador = response.data: mensajeError.mostrarError();		
            });
        };

        var setRegTemStatistics = function() {
	        svsManejadorJugadores.obtenerTempRegularJugador(vm.playerId).then(function(response) {
	        	response.status ? vm.estadisticas.regular = response.data: mensajeError.mostrarError();		
            });
        };

        var setPostTemStatistics = function() {
	        svsManejadorJugadores.obtenerTempPosteriorJugador(vm.playerId).then(function(response) {
	        	response.status ? vm.estadisticas.posterior = response.data: mensajeError.mostrarError();		
            });
        };

        setPlayerId();
        setPlayerProfile();
        setRegTemStatistics();
        setPostTemStatistics();
    };

    angular
        .module('myDataCenter')
        .controller('playerCtl', playerCtl);			
})();