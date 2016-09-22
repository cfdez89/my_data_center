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

    function teamsService(solicitudesHttp) {  
        
        var urlBase = 'http://localhost:3000/teams';
        
        var getTeams = function() {
            return  solicitudesHttp.retrieve(urlBase).then(function(pResp) {
                        return pResp.data; 
                    },  
                    function(pResp) {
                        return pResp.data;   
                    });
        };
   
        return  {
                    getAllTeams: function() {
                        return getTeams();             
                    }
                };
    };
    
    angular
        .module('myDataCenter')
        .factory('teamsService', teamsService);
})();