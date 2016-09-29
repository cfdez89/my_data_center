/*Tecnologico de Costa Rica
 *Diseño de software
 *X-NBA MyDataCenter
 *Elaborado por Carlos Fernandez Jimenez
 *Octubre 2015 
 */
 
 /*Servicio estadisticas
 * Servicio para obtener los rankings de estadisticas de juego o estadisiticas sociales
 * de todos los jugadores activos
 */
 
(function(){
  'use strict';
	angular
		  .module('myDataCenter')	
    	.factory('svsManejadorEstadisticas', [
          'requestService',
    	    function(requestService){
            
              var urlBase   = "/estadisticas";

              var getEstadisticasJuegos = function(pParametros){
                  var url = urlBase + '/' + pParametros.temporada + '/juegos';

                  return  requestService.retrieve(url).then(function(pResp){
                              return pResp.data; 
                          },  
                          function(pResp){
                              return pResp.data;   
                          });
              };

              var getEstadisticasSociales = function(pParametros){
                  var url = urlBase + '/' + pParametros.fechaMinima + '/sociales/';
                  
                  return  requestService.retrieve(url).then(function(pResp){
                              return pResp.data;
                          },
                          function(pResp){
                              return pResp.data;
                          });             
              };

    	        return  {
      	                obtenerEstadisticasJuegos: function(pParametros){
                            return getEstadisticasJuegos(pParametros);  
      	                },
      	                obtenerEstadisticasSociales: function(pParametros){
      	            	      return  getEstadisticasSociales(pParametros);
      	                }
    	                };
        }]);
})();