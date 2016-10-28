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

    angular
        .module('myDataCenter')
        .factory('playersService', playersService);

    playersService.$inject = ['requestService', 'API_URL'];

    function playersService(requestService, API_URL) {  
        
        var urlBase   = API_URL + "/jugadores";
        
        function getPlayersProfile() {
            
            return  requestService.retrieve(urlBase).then(function(pResp) {
                        return pResp.data; 
                    },  
                    function(pResp) {
                        return pResp.data;   
                    });
        };

        function getPlayerProfile(pId) {
            var url = urlBase + '/' + pId;
                  
            return  requestService.retrieve(url).then(function(pResp) {
                        return pResp.data;
                    },
                    function(pResp) {
                        return pResp.data;
                    });             
        };

        function getTempRegJugador(pId) {
            var url = urlBase + '/' + pId + '/temporadaregular';
            
            return  requestService.retrieve(url).then(function(pResp) {
                        return pResp.data;
                    },
                    function(pResp) {
                        return pResp.data;
                    }); 
        };

        function getTempPostJugador(pId) {
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
    
})();