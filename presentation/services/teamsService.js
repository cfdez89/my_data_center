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
        .factory('teamsService', teamsService);

    teamsService.$inject = ['requestService', 'API_URL'];

    function teamsService(requestService, API_URL) {  
        
        var urlBase = API_URL + '/teams';
        
        function getTeams() {
            return  requestService.retrieve(urlBase).then(function(pResp) {
                        return pResp.data; 
                    },  
                    function(pResp) { 
                        return { status: false, message: pResp.statusText, data: null };   
                    });
        };
   
        return  {
            getAllTeams: function() {
                return getTeams();             
            }
        };
    };
    
})();