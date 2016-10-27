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

    angular
        .module('myDataCenter')
        .controller('playerCtl', playerCtl);

    playerCtl.$inject = ['sharePlayerService', 'playersService', 'notificationService'];

    function playerCtl(sharePlayerService, playersService, notificationService) {
        
        var vm          = this;
        vm.playerId     = -1;
        vm.jugador      = [];
        vm.estadisticas = {};
        
        function setPlayerId() {
            vm.playerId = sharePlayerService.getPlayer();
        };

        function setPlayerProfile() {
	        playersService.obtenerJugador(vm.playerId).then(function(response) {
	        	response.status ? vm.jugador = response.data: notificationService.dangerMessage();		
            });
        };

        function setRegTemStatistics() {
	        playersService.obtenerTempRegularJugador(vm.playerId).then(function(response) {
	        	response.status ? vm.estadisticas.regular = response.data: notificationService.dangerMessage();		
            });
        };

        function setPostTemStatistics() {
	        playersService.obtenerTempPosteriorJugador(vm.playerId).then(function(response) {
	        	response.status ? vm.estadisticas.posterior = response.data: notificationService.dangerMessage();		
            });
        };

        setPlayerId();
        setPlayerProfile();
        setRegTemStatistics();
        setPostTemStatistics();
    };

})();