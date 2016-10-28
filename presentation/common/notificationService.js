/*Tecnologico de Costa Rica
 *Diseño de software
 *X-NBA MyDataCenter
 *Elaborado por Carlos Fernandez Jimenez
 *Octubre 2015 
 */
 
 /*Servicio notificaciones
 * Servicio para mostrar los mensajes de notificacion
 */

 (function() {
    'use strict';

    angular
        .module('myDataCenter')
        .factory('notificationService', notificationService);

    notificationService.$inject = ['Flash'];

    function notificationService(Flash) { 
	
        function showSuccess(pMessage) {

            var message = '<strong>Well done ! </strong>';
            return Flash.create('success', message + pMessage);
        };

        function showInfo(pMessage) {

            var message = '<strong>Important ! </strong>';
            return Flash.create('info', message + pMessage);  
        };

        function showWarning(pMessage) {

            var message = '<strong>Warning ! </strong>';
            return Flash.create('warning', message + pMessage);  
        };

        function showDanger(pMessage) {

            var message = '<strong>Error ! </strong>';
            return Flash.create('danger', message + pMessage);  
        };

        return {
            successMessage: function(pMessage) {
                return showSuccess(pMessage);
            },
            infoMessage: function(pMessage) {
                return showInfo(pMessage);
            },
            warningMessage: function(pMessage) {
                return showWarning(pMessage);
            },
            dangerMessage: function(pMessage) {
                return showDanger(pMessage);
            }
        }
    }; 
    
    
})();