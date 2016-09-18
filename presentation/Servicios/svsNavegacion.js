/*Tecnologico de Costa Rica
 *Diseño de software
 *X-NBA MyDataCenter
 *Elaborado por Carlos Fernandez Jimenez
 *Octubre 2015 
 */
 
 /*Servicio navegacion
 * Servicio para compartir informacion de navegacion entre controladores
 */
 
(function(){
    'use strict';
	angular
		.module('myDataCenter')
		.service('svsNavegacion', function($rootScope){
		    //var menuNavegacion = [];
		    var menuNavegacion = true;
			return {
				setNavegacion: function(pOpciones){
					menuNavegacion = pOpciones;
					$rootScope.verMenu = true;
					/*for(opc of pOpciones){
						menuNavegacion.push(opc);	
					}*/ 
				},
				getNavegacion: function(){
				    return menuNavegacion;
				},
				eliminarNavegacion: function(){
					//menuNavegacion = [];//malo
				}
			}
	});		
})();
	
	
 //<script type="text/javascript" src="Controladores/ctlMenu.js"></script>	
	