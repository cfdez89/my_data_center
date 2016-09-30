/*Tecnologico de Costa Rica
 *Diseño de software
 *X-NBA MyDataCenter
 *Elaborado por Carlos Fernandez Jimenez
 *Octubre 2015 
 */
 
 /*Setter controlador index
 * Define el controlador de la vista global index
 */
 
(function() {
	'use strict';

	angular
		.module('myDataCenter')
	    .controller('indexCtl', indexCtl);

	function indexCtl() {
		
		var vm = this;
        /*
		vm.verJugadores = function() {
			$location.path('/jugadores').replace();
		};
		*/

		var hideMenuBar = function() {
			$('.navbar-collapse').click('li', function() {
				$('.navbar-collapse').collapse('hide');
				console.log("ocultar");
			});
		};	

	    hideMenuBar();
	};
	
})();