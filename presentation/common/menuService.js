/*Tecnologico de Costa Rica
 *Diseño de software
 *X-NBA MyDataCenter
 *Elaborado por Carlos Fernandez Jimenez
 *Octubre 2015 
 */
 
 /*Servicio para compartir los links utilizados en la app
 */
 
(function() {
    'use strict';

    angular
        .module('myDataCenter')
        .service('menuService', menuService);

    function menuService() { 

        var menuLinks = [
            { id: 0, title: 'Teams', url: '/teams' },
            { id: 1, title: 'Players', url: '/players' },
            { id: 2, title: 'Rankings', url: '/rankings' }
        ];

        function getLinks() {
            return menuLinks;  
        };

        return {
            getMenuLinks: function() {
                return getLinks();
            }
        }
    }; 
    
})();