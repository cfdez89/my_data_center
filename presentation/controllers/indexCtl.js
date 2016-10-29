/*Tecnologico de Costa Rica
 *Diseño de software
 *X-NBA MyDataCenter
 *Elaborado por Carlos Fernandez Jimenez
 *Octubre 2015 
 */
 
 /*Setter controlador index
 * Define el controlador de la vista global index
 */
 
(function() {
    'use strict';

    angular
        .module('myDataCenter')
        .controller('indexCtl', indexCtl);

    indexCtl.$inject = ['menuService'];

    function indexCtl(menuService) {
		
        var vm = this;
        vm.menus = menuService.getMenuLinks();

        function hideMenuBar() {
            $('.navbar-collapse').click('li', function() {
                $('.navbar-collapse').collapse('hide');
            });
        };	

        hideMenuBar();
    };
	
})();