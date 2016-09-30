/*Tecnologico de Costa Rica
 *Diseño de software
 *X-NBA MyDataCenter
 *Elaborado por Carlos Fernandez Jimenez
 *Octubre 2015 
 */
 
 /*Servicio usuario
 * Servicio para validar si un usuario existe en el sistema
 */

(function() {
    'use strict';

    function playersService(requestService) {  
        
        var urlBase   = "http://localhost:3000/jugadores";
        
        var getPlayersProfile = function() {
            
            return  requestService.retrieve(urlBase).then(function(pResp) {
                        return pResp.data; 
                    },  
                    function(pResp) {
                        return pResp.data;   
                    });
        };

        var getPlayerProfile = function(pId) {
            var url = urlBase + '/' + pId;
                  
            return  requestService.retrieve(url).then(function(pResp) {
                        return pResp.data;
                    },
                    function(pResp) {
                        return pResp.data;
                    });             
        };

        var getTempRegJugador = function(pId) {
            var url = urlBase + '/' + pId + '/temporadaregular';
            
            return  requestService.retrieve(url).then(function(pResp) {
                        return pResp.data;
                    },
                    function(pResp) {
                        return pResp.data;
                    }); 
        };

        var getTempPostJugador = function(pId) {
            var url = urlBase + '/' + pId + '/temporadaposterior';
            
            return  requestService.retrieve(url).then(function(pResp) {
                        return pResp.data;
                    },
                    function(pResp) {
                        return pResp.data;
                    }); 
        };     
   
        return  {
            obtenerJugadores: function() {
                return getPlayersProfile();  
            },
            obtenerJugador: function(pId) {
                return  getPlayerProfile(pId);
            },
            obtenerTempRegularJugador: function(pId) {
                return  getTempRegJugador(pId);
            },
            obtenerTempPosteriorJugador: function(pId) {
                return getTempPostJugador(pId);
            }
        };

    };
    
    angular
        .module('myDataCenter')
        .factory('playersService', playersService);
})();