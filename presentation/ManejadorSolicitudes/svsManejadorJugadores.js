/*Tecnologico de Costa Rica
 *Diseño de software
 *X-NBA MyDataCenter
 *Elaborado por Carlos Fernandez Jimenez
 *Octubre 2015 
 */
 
 /*Servicio jugadores
 * Servicio para obtener la informacion de todos los jugadores activos
 */
 
(function(){
  'use strict';
	angular
		  .module('myDataCenter')	
    	.factory('svsManejadorJugadores', [
          'solicitudesHttp',
    	    function(solicitudesHttp){
              var urlBase   = "http://localhost:3000/jugadores";

              var getPerfilJugadores = function(){
                  return  solicitudesHttp.retrieve(urlBase).then(function(pResp){
                              return pResp.data; 
                          },  
                          function(pResp){
                              return pResp.data;   
                          });
              };

              var getPerfilJugador = function(pId){
                  var url = urlBase + '/' + pId;
                  
                  return  solicitudesHttp.retrieve(url).then(function(pResp){
                              return pResp.data;
                          },
                          function(pResp){
                              return pResp.data;
                          });             
              };

              var getTempRegJugador = function(pId){
                  var url = urlBase + '/' + pId + '/temporadaregular';
                  return  solicitudesHttp.retrieve(url).then(function(pResp){
                              return pResp.data;
                          },
                          function(pResp){
                              return pResp.data;
                          }); 
              };

              var getTempPostJugador = function(pId){
                   var url = urlBase + '/' + pId + '/temporadaposterior';
                   return  solicitudesHttp.retrieve(url).then(function(pResp){
                              return pResp.data;
                          },
                          function(pResp){
                              return pResp.data;
                          }); 
              };

    	        return  {
      	                obtenerJugadores: function(){
                            return getPerfilJugadores();  
      	                },
      	                obtenerJugador: function(pId){
      	            	      return  getPerfilJugador(pId);
      	                },
                        obtenerTempRegularJugador: function(pId){
                            return  getTempRegJugador(pId);
                        },
                        obtenerTempPosteriorJugador: function(pId){
                            return getTempPostJugador(pId);
                        }
    	                };
        }]);
})();
