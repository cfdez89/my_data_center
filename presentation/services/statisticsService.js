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
        .factory('stadisticsService', stadisticsService);

    stadisticsService.$inject = ['requestService', 'API_URL'];

    function stadisticsService(requestService, API_URL) {  
        
        var urlBase = API_URL + '/estadisticas';
        
        function getGameStadistics(pParam) {
            
            var url = urlBase + '/' + pParam.temporada + '/juegos';
            
            return  requestService.retrieve(urlBase).then(function(pResp) {
                        return pResp.data; 
                    },  
                    function(pResp) {
                        return { status: false, message: pResp.statusText, data: null };   
                    });
        };

        function getSocialStadistics(pParam) {
            
            var url = urlBase + '/' + pParam.fechaMinima + '/sociales/';
            
            return  requestService.retrieve(urlBase).then(function(pResp) {
                        return pResp.data; 
                    },  
                    function(pResp) {
                        return { status: false, message: pResp.statusText, data: null };    
                    });
        };
   
        return  {
            obtenerEstadisticasJuegos: function(pParam) {
                return getGameStadistics(pParam);             
            },
            obtenerEstadisticasSociales: function(pParam) {
                return getSocialStadistics(pParam);
            }
        };
    };
    
})();