/*Tecnologico de Costa Rica
 *Diseño de software
 *X-NBA MyDataCenter
 *Elaborado por Carlos Fernandez Jimenez
 *Octubre 2015 
 */
 
 /*Setter controlador jugadores
 * Define el controlador de la vista jugadores
 */
 
(function() {
    'use strict';

    angular
        .module('myDataCenter')
	    .controller('playersCtl', playersCtl);

	playersCtl.$inject = ['$location', 'sharePlayerService', 'playersService', 'notificationService'];

	function playersCtl($location, sharePlayerService, playersService, notificationService) {
		
		var vm           = this;
		vm.players       = [];
	    vm.tagMdl        = "";
		vm.filtrados     = 0; 
		vm.visibleSearch = false;

        var setPlayers = function() {
            playersService.obtenerJugadores().then(function(response) {
                response.status ? vm.players = response.data: notificationService.dangerMessage();	
            });
        };

        vm.showSearch = function() {
        	if(vm.tagMdl != ""){
                vm.visibleSearch = !vm.visibleSearch;
        	}   
        };

        vm.gotToProfile = function(pId) {
		    sharePlayerService.setPlayer(pId);
		    $location.path('/player').replace();
		};

        setPlayers();
        
	};

})();