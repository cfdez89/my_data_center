/*Tecnologico de Costa Rica
 *Diseño de software
 *X-NBA MyDataCenter
 *Elaborado por Carlos Fernandez Jimenez
 *Octubre 2015 
 */
 
 /*Controlador menu
 **/
(function(){
	//Controlador de la vista de menu 
	'use strict';
	angular
		.module('myDataCenter')
		.controller('ctlMenu', [
			'$scope',
			'$location',
			function($scope, $location){
			
				$scope.verJugadores = function(){
			    	$location.path('/jugadores').replace(); 
			  	};
					
				$scope.verRankings = function(){
					$location.path('/rankings').replace();
				};
		}]);	
})();