/*Tecnologico de Costa Rica
 *Diseño de software
 *X-NBA MyDataCenter
 *Elaborado por Carlos Fernandez Jimenez
 *Octubre 2015 
 */
 
 /*Servicio sesion de usuario
 * Servicio para compartir informacion de sesiones entre controladores
 */
 
(function(){
    'use strict';
	angular
		.module('myDataCenter')
		.service('svsSesion', function($rootScope){
			var estadoSesion = {
				sesion: false
			};
			
			return {
				getEstadoSesion: function(){
					return estadoSesion;
				},
				setEstadoSesion: function(value){
					estadoSesion.sesion = value;
					$rootScope.h = estadoSesion.sesion;
				}
			}
		});
})();		