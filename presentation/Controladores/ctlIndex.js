/*Tecnologico de Costa Rica
 *Diseño de software
 *X-NBA MyDataCenter
 *Elaborado por Carlos Fernandez Jimenez
 *Octubre 2015 
 */
 
 /*Setter controlador index
 * Define el controlador de la vista global index
 */
 
(function(){
	'use strict';
	angular
		.module('myDataCenter')
	    .controller('ctlIndex', [
	    	'$scope',
	    	'$location',
	    	'svsSesion',
	    	'svsNavegacion',
	    	function($scope, $location, svsNavegacion){
		
				//$scope.navegacion = svsNavegacion.getNavegacion();
				$scope.verMenu  = true;
				//$scope.verMenu = false;
				console.log($scope.verMenu);
				$scope.tab = 1;
				
				$scope.selectTab = function(pTab){
				//	this.tab = pTab;
					console.log(this.tab);
				    $location.path('/rankings').replace();
				
				};
				
				$scope.actualizarNavegacion = function(){
					//svsNavegacion.setNavegacion(false);
					///console.log(svsNavegacion.getNavegacion());
					/*svsNavegacion.setNavegacion([
						{nombre:"Jugadores", activo:1, url:"/"},
						{nombre:"Rankings", activo:2, url:"/"},
						{nombre:"Salir", activo:3, url:"/"}
						]);*/
				};
		
				$scope.isSelected = function(pTap){
					return this.tab === pTap;
				};
				
		        $scope.enviar= function(){
		        	console.log($scope.navegacion);	
					//$location.path('/rankings').replace();
					
		        };
		        
		
				
				
				$scope.verJugadores = function(){
					$location.path('/jugadores').replace();
				};
				
				$scope.verRankings = function(){
					$location.path('/rankings').replace();
				};
		}]);	
})();