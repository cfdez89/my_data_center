/*Tecnologico de Costa Rica
 *Diseño de software
 *X-NBA MyDataCenter
 *Elaborado por Carlos Fernandez Jimenez
 *Octubre 2015 
 */
 
 /*Servicio obtener temporadas
 * Servicio para obtener la informacion de las temporadas
 */
 
(function(){
    'use strict';
    angular
        .module('myDataCenter') 
        .factory('svsManejadorSesiones', [
            'solicitudesHttp',
            function(solicitudesHttp){
                
                var urlBase = "/iniciarSesion";
                
                var conectarUsuario = function(pDatos){
                    return  solicitudesHttp.create(urlBase, pDatos).then(function(pResp){
                                return pResp.data; 
                            },  
                            function(pResp){
                                return pResp.data;   
                            });
                };

                var desconectarUsuario = function(){
                    return  {};
                };
           
                return{
                    conectar: function(pDatos){
                        return conectarUsuario(pDatos);             
                   },
                   desconectar: function(){
                       return null
                   }
                };
        }]);
})();




	