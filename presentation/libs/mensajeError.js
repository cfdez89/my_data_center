/*Tecnologico de Costa Rica
 *Diseño de software
 *X-NBA MyDataCenter
 *Elaborado por Carlos Fernandez Jimenez
 *Octubre 2015 
 */
 
 /*Servicio error
 * Servicio para mostrar los mensajes de error
 */
 
(function(){
    'use strict';
    angular
        .module('myDataCenter') 
        .factory('mensajeError', [
            'Flash',
            function(Flash){

                var mensaje = '<strong>Error! </strong>';
                
                var verError = function(pMensaje){

                    return Flash.create('danger', mensaje+pMensaje);
                };

                var verNotificacion = function(pMensaje){

                    return Flash.create('warning', mensaje+pMensaje);
                };

                return  { 
                            mostrarError: function(pMensaje){
                                return verError(pMensaje);             
                            },
                            mostrarNotificacion: function(pMensaje){
                                return verNotificacion(pMensaje);
                            }
                        };
        }]);
})();