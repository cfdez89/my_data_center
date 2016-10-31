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
                        return { status: false, message: pResp.statusText, data: null };   
                    });
        };

        function getPlayerProfile(pId) {
            var url = urlBase + '/' + pId;
                  
            return  requestService.retrieve(url).then(function(pResp) {
                        return pResp.data;
                    },
                    function(pResp) {
                        return { status: false, message: pResp.statusText, data: null }; 
                    });             
        };

        function getRegSeasonPlayer(pId) {
            var url = urlBase + '/' + pId + '/temporadaregular';
            
            return  requestService.retrieve(url).then(function(pResp) {
                        return pResp.data;
                    },
                    function(pResp) {
                        return { status: false, message: pResp.statusText, data: null }; 
                    }); 
        };

        function getPostSeasonPlayer(pId) {
            var url = urlBase + '/' + pId + '/temporadaposterior';
            
            return  requestService.retrieve(url).then(function(pResp) {
                        return pResp.data;
                    },
                    function(pResp) {
                        return { status: false, message: pResp.statusText, data: null }; 
                    }); 
        };     
   
        return  {
            getAllPlayers: function() {
                return getPlayersProfile();  
            },
            getPlayer: function(pId) {
                return  getPlayerProfile(pId);
            },
            getRegularSeason: function(pId) {
                return  getRegSeasonPlayer(pId);
            },
            getPostSeason: function(pId) {
                return getPostSeasonPlayer(pId);
            }
        };

    };
    
})();