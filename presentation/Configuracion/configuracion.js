/*Tecnologico de Costa Rica
 *Diseño de software
 *X-NBA MyDataCenter
 *Elaborado por Carlos Fernandez Jimenez
 *Octubre 2015 
 */
 
 /*Setter modulos MyDataCente
  *Inyeccion de modulos necesarios para la aplicacion en angularJs
 */
 angular
    .module('myDataCenter', [
        'ngResource',
        'ngRoute',
        'flash'
    ]);
    
 /*Setter rutas
  *Define las rutas para los templates de cada pagina
 */
(function(){
    'use strict'
    angular
        .module('myDataCenter')
        .config(function($locationProvider, $routeProvider){
            $locationProvider
                .html5Mode({
                    enabled: true,
                    requireBase: false
                });
            $routeProvider
                .when('/',{
                    templateUrl: 'Vistas/iniciarSesion.html'
                })
                .when('/rankings',{
                    templateUrl: 'Vistas/rankings.html'
                })
                .when('/jugadores',{
                    templateUrl: 'Vistas/jugadores.html'
                })
                .when('/jugador',{
                    templateUrl: 'Vistas/jugador.html'
                })
                .otherwise({
                    redirectTo: 'Vistas/iniciarSesion.html'
                });
        });	
})();
