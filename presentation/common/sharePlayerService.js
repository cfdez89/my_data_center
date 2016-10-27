/*Tecnologico de Costa Rica
 *Diseño de software
 *X-NBA MyDataCenter
 *Elaborado por Carlos Fernandez Jimenez
 *Octubre 2015 
 */
 
 /*Servicio para compartir id jugador 
 * Servicio para compartir el id de un jugador entre controladores
 */
 
(function() {
    'use strict';

    angular
        .module('myDataCenter')
        .service('sharePlayerService', sharePlayerService);

    function sharePlayerService() { 

        var playerId;
	
        function setPlayerId(pId) {
            playerId = pId;
        };

        function getPlayerId() {
            return playerId;  
        };

        return {
            setPlayer: function(pId) {
                setPlayerId(pId);
            },
            getPlayer: function() {
                return getPlayerId();
            }
        }
    }; 
    
})();