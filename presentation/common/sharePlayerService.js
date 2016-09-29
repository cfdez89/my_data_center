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

    function sharePlayerService() { 

        var playerId;
	
        var setPlayerId = function(pId) {
            playerId = pId;
        };

        var getPlayerId = function() {
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
    
    angular
        .module('myDataCenter')
        .service('sharePlayerService', sharePlayerService);
})();