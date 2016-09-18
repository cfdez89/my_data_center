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
        .config(config);
    
    function config($locationProvider, $routeProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });
        $routeProvider
            .when('/',{
                templateUrl: '/presentation/views/players.html'
                //controller: 'Avengers',
               //controllerAs: 'vm'
            })
            .when('/teams', {
                templateUrl: '/presentation/views/rankings.html'
            })
            .when('/rankings', {
                templateUrl: '/presentation/views/rankings.html'
            })
            .when('/players', {
                templateUrl: '/presentation/views/players.html'
            })
            .when('/jugador', {
                templateUrl: '/presentation/views/jugador.html'
            })
            .otherwise({
                redirectTo: '/presentation/views/players.html'
            });
    };	
})();
