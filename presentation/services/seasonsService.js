/*Tecnologico de Costa Rica
 *Diseño de software
 *X-NBA MyDataCenter
 *Elaborado por Carlos Fernandez Jimenez
 *Octubre 2015 
 */
 
 /*Servicio temporadas
 * Servicio para obtener todas las temporadas
 */

(function() {
    'use strict';

    angular
        .module('myDataCenter')
        .factory('seasonsService', seasonsService);

    seasonsService.$inject = ['requestService'];

    function seasonsService(requestService) {  
        
        var urlBase = 'http://localhost:3000/temporadas';
        
        function getSeasons() {
            return  requestService.retrieve(urlBase).then(function(pResp) {
                        return pResp.data; 
                    },  
                    function(pResp) {
                        return pResp.data;   
                    });
        };
   
        return  {
            getAllSeasons: function() {
                return getSeasons();             
            }
        };
    };
    
})();