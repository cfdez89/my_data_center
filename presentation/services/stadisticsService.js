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

    stadisticsService.$inject = ['requestService'];

    function stadisticsService(requestService) {  
        
        var urlBase = 'http://localhost:3000/estadisticas';
        
        var getGameStadistics = function(pParam) {
            
            var url = urlBase + '/' + pParam.temporada + '/juegos';
            
            return  requestService.retrieve(urlBase).then(function(pResp) {
                        return pResp.data; 
                    },  
                    function(pResp) {
                        return pResp.data;   
                    });
        };

        var getSocialStadistics = function(pParam) {
            
            var url = urlBase + '/' + pParam.fechaMinima + '/sociales/';
            
            return  requestService.retrieve(urlBase).then(function(pResp) {
                        return pResp.data; 
                    },  
                    function(pResp) {
                        return pResp.data;   
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