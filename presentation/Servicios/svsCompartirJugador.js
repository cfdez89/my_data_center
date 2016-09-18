/*Tecnologico de Costa Rica
 *Diseño de software
 *X-NBA MyDataCenter
 *Elaborado por Carlos Fernandez Jimenez
 *Octubre 2015 
 */
 
 /*Servicio para compartir id jugador 
 * Servicio para compartir el id de un jugador entre controladores
 */
 
(function(){
    'use strict';
	angular
		.module('myDataCenter')
		.service('svsCompartirJugador', function(){
			
			var idJugador;
			
			var asignarIdJugador = function(pId){
			    idJugador = pId;
			};
			var obtenerIdJugador = function(){
			  return idJugador;  
			};
			
			return {
			    setIdJugador: function(pId){
				    asignarIdJugador(pId);
				},
				getIdJugador: function(){
					return obtenerIdJugador();
				}
			}
		});
})();