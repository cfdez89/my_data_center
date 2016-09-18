/*Tecnologico de Costa Rica
 *Diseño de software
 *X-NBA MyDataCenter
 *Elaborado por Carlos Fernandez Jimenez
 *Octubre 2015 
 */
 
 /*Servicio para realizar las solicitudes CRUD (create, retrieve, update, delete) 
 * Servicio para realizar las operaciones necesarias a un api 
 */
 
(function(){
    'use strict';
	angular
		.module('myDataCenter')
		.service('solicitudesHttp', [ 
			'$http', 
			function($http){
				return {
				    create: function(pUrl, pData){
					    return $http({
							        method: "POST",
								    url: pUrl,
								    data: pData,
									headers: { 'Content-Type': 'application/json' }
								});
					},
					retrieve: function(pUrl){
						return $http({
							        method: "GET",
								    url: pUrl,
									headers: { 'Content-Type': 'application/json' }
								});
					},
					update: function(pUrl, pData){
						return $http({
							        method: "PUT",
								    url: pUrl,
								    data: pData,
									headers: { 'Content-Type': 'application/json' }
								});
					},
					delete: function(pUrl){
						return $http({
							        method: "DELETE",
								    url: pUrl,
									headers: { 'Content-Type': 'application/json' }
								});
					}
				};
		    }]);
})();