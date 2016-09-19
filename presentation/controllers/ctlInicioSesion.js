/*Tecnologico de Costa Rica
 *Diseño de software
 *X-NBA MyDataCenter
 *Elaborado por Carlos Fernandez Jimenez
 *Octubre 2015 
 */
 
 /*Setter controlador inicioSesion
 * Define el controlador de la vista inicioSesion
 */
(function(){
	'use strict';
	angular
		.module('myDataCenter')
    	.controller('ctlInicioSesion', [
    		'$scope',
    		'$location',
    		'svsSesion',
    		'svsNavegacion',
    		'svsManejadorSesiones',
    		'mensajeError',
    		function($scope, $location, svsSesion, svsNavegacion, svsManejadorSesiones, mensajeError){
		        
		        $scope.nombreUsuario = "";
                $scope.usuario    = "";
                $scope.contrasena = "";
		        
		        $scope.verMenu = svsNavegacion.getNavegacion();
		        
                var mostrarError = function(){
                    console.log("error debe venir de un servicio");
                };

                var conectarUsuario = function(pNombre){
                    $scope.nombreUsuario = pNombre.nombre;
                    $location.path('/jugadores').replace();
                };

				var verificarUsuario = function(pUsuario){

                    pUsuario.registrado ? conectarUsuario(pUsuario.nombre): mostrarError();//mostrar mensaje de no valido 
                };//guardar el nombre en el servicio

                $scope.iniciarSesion = function(pUsuario, pContrasena){
					svsNavegacion.setNavegacion(true);
			
					svsManejadorSesiones.conectar({usuario: pUsuario, contrasena: pContrasena}).then(function(pResp){
        				pResp.error ? mensajeError.mostrarError(pResp.parametros): verificarUsuario(pResp.parametros);  
                    });
				};
		}]);	
})();