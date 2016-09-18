/*Tecnologico de Costa Rica
 *Diseño de software
 *X-NBA MyDataCenter
 *Elaborado por Carlos Fernandez Jimenez
 *Octubre 2015 
 */
 
 /*Servicio usuario
 * Servicio para validar si un usuario existe en el sistema
 */
 
(function(){
    'use strict';
    angular
        .module('myDataCenter') 
        .factory('svsManejadorTemporadas', [
            'solicitudesHttp',
            function(solicitudesHttp){
                
                var urlBase = '/temporadas';
                
                var getTemporadas = function(){
                    return  solicitudesHttp.retrieve(urlBase).then(function(pResp){
                                return pResp.data; 
                            },  
                            function(pResp){
                                return pResp.data;   
                            });
                };
           
                return  {
                            obtenerTemporadas: function(){
                            return getTemporadas();             
                        }
                };
        }]);
})();