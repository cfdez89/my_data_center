/*Tecnologico de Costa Rica
 *Diseño de software
 *X-NBA MyDataCenter
 *Elaborado por Carlos Fernandez Jimenez
 *Octubre 2015 
 */
 
 /*Controlador rankings
 * Define el controlador de la vista rankings
 */
(function(){
    'use strict';
    angular
        .module('myDataCenter')
        .controller('rankingCtl', rankingCtl);
    
    rankingCtl.$inject = ['statisticsService', 'seasonsService', 'notificationService'];

    function rankingCtl(statisticsService, seasonsService, notificationService) {
               
        var vm          = this;
        vm.searchParams = {};
        vm.seasons      = [];
        vm.rankings     = {
            juego: [],
    	    social: []
        };
    	

        function getSeasons(){
            seasonsService.getAllSeasons().then(function(response){ 
                response.success? vm.seasons = response.data
                                : notificationService.dangerMessage(response.message); 
            });
        };

        function generateGameRanking(pParams) {
            var index = document.getElementById("teamOpt");
            pParams.season = index.options[index.selectedIndex].text;
        
            statisticsService.getGameRanking(pParametros).then(function(pResp){
                        
            });
        };

        function generateSocialRanking(pParams) {
            statisticsService.getSocialRanking(pParams).then(function(response){ console.log(response);
                        
            });
        };

        vm.generateSocialRanking = generateSocialRanking;
        vm.generateGameRanking   = generateGameRanking;
        getSeasons();
    };	
})();