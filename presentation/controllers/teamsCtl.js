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

    function teamsCtl($scope, teamsService, mensajeError) {
		
        var vm   = this;	
        vm.teams = [];

        var getTeams = function() {
            teamsService.getAllTeams().then(function(response) {
                response.status ? vm.teams = response.data: mensajeError.mostrarError();	
            });
        };

        getTeams();
    };
	
    angular
        .module('myDataCenter')
        .controller('teamsCtl', teamsCtl);
})();