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
        vm.player       = {};
        vm.statistics   = {};
        
        function getPlayerId() {
            vm.playerId = sharePlayerService.getPlayer();
        };

        function getPlayerProfile() {
            playersService.getPlayer(vm.playerId).then(function(response) { 
                response.success? vm.player = response.data
                                : notificationService.dangerMessage(response.message);		
            });
        };

        function getRegularSeason() {
            playersService.getRegularSeason(vm.playerId).then(function(response) { console.log(response);
                response.success? vm.statistics.regular = response.data
                                : notificationService.dangerMessage(response.message);		
            });
        };

        function getPostSeason() {
            playersService.getPostSeason(vm.playerId).then(function(response) {
                response.success? vm.statistics.posterior = response.data
                                : notificationService.dangerMessage(response.message);		
            });
        };

        getPlayerId();
        getPlayerProfile();
        getRegularSeason();
        getPostSeason();
    };

})();