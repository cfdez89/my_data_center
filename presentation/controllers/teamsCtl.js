/*Tecnologico de Costa Rica
 *Diseño de software
 *X-NBA MyDataCenter
 *Elaborado por Carlos Fernandez Jimenez
 *Octubre 2015 
 */
 
 /*Teams controller
 * Define el controlador de la vista global del equipo
 */
 
(function() {
    'use strict';

    angular
        .module('myDataCenter')
        .controller('teamsCtl', teamsCtl);

    teamsCtl.$inject = ['teamsService', 'notificationService'];

    function teamsCtl(teamsService, notificationService) {
		
        var vm   = this;	
        vm.teams = [];

        function getTeams() {
            teamsService.getAllTeams().then(function(response) {
                response.success? vm.teams = response.data
                                : notificationService.dangerMessage(response.message);	
            });
        };

        getTeams();
    };
	

})();