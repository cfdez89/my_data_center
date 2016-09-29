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

    function playerCtl(sharePlayerService, svsManejadorJugadores, svsManejadorEstadisticas, notificationService) {
        var vm          = this;
        vm.playerId     = -1;
        vm.jugador      = [];
        vm.estadisticas = {};
        
        var setPlayerId = function() {
            vm.playerId = sharePlayerService.getPlayer();
        };

        var setPlayerProfile = function() {
	        svsManejadorJugadores.obtenerJugador(vm.playerId).then(function(response) {
	        	response.status ? vm.jugador = response.data: notificationService.dangerMessage();		
            });
        };

        var setRegTemStatistics = function() {
	        svsManejadorJugadores.obtenerTempRegularJugador(vm.playerId).then(function(response) {
	        	response.status ? vm.estadisticas.regular = response.data: notificationService.dangerMessage();		
            });
        };

        var setPostTemStatistics = function() {
	        svsManejadorJugadores.obtenerTempPosteriorJugador(vm.playerId).then(function(response) {
	        	response.status ? vm.estadisticas.posterior = response.data: notificationService.dangerMessage();		
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