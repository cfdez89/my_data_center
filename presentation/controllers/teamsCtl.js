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

    function teamsCtl($scope, $location) {
		
        var vm = this;	
    };
	
    angular
        .module('myDataCenter')
        .controller('teamsCtl', teamsCtl);
})();