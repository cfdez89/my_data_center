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
        .config(configuration);
    
    configuration.$inject = ['$locationProvider', '$routeProvider'];    
    
    function configuration($locationProvider, $routeProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });
        $routeProvider
            .when('/',{
                templateUrl: '/presentation/views/players.html',
                controller: 'playersCtl',
                controllerAs: 'vm'   
            })
            .when('/teams', {
                templateUrl: '/presentation/views/teams.html',
                controller: 'teamsCtl',
                controllerAs: 'vm'
            })
            .when('/rankings', {
                templateUrl: '/presentation/views/rankings.html'
            })
            .when('/players', {
                templateUrl: '/presentation/views/players.html',
                controller: 'playersCtl',
                controllerAs: 'vm'   
            })
            .when('/player', {
                templateUrl: '/presentation/views/player.html',
                controller: 'playerCtl',
                controllerAs: 'vm'
            })
            .otherwise({
                redirectTo: '/presentation/views/players.html'
            });
    };

})();
