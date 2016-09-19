/*
 *Carlos Fernández Jiménez 
 *my_data_center basic app for software design course
 *API routes module to access services
*/

/* import express modules */
var express = require('express');

/* import services modules */
var nbaService = require('../services/services.js');


module.exports.initialize = function(app) {
    var router = express.Router();

    router.get('/temporadas', nbaService.getAllSeasons);
    router.get('/jugadores', nbaService.getAllPlayers);
    router.get('/jugadores/:id', nbaService.getPlayerById);
    router.get('/jugadores/:id/temporadaregular', nbaService.getAllRegularSeasonPlayerById);
    router.get('/jugadores/:id/temporadaposterior', nbaService.getAllPostSeasonPlayerById);
    router.get('/estadisticas/:id/juegos', nbaService.getAllGameStatisticsPlayerById);
    router.get('/estadisticas/sociales', nbaService.getAllSocialStatisticsPlayerById);

    app.use('/temporadas', router);
    app.use('/jugadores', router);
    app.use('/jugadores/:id/perfil', router);
    app.use('/jugadores/:id/temporadaregular', router);
    app.use('/jugadores/:id/temporadaposterior', router);
    app.use('/estadisticas/:id/juegos', router);
    app.use('/estadisticas/sociales', router);
};