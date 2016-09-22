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
    //router
    app.get('/temporadas', nbaService.getAllSeasons);
    app.get('/jugadores', nbaService.getAllPlayers);
    app.get('/jugadores/:id', nbaService.getPlayerById);
    app.get('/jugadores/:id/temporadaregular', nbaService.getAllRegularSeasonPlayerById);
    app.get('/jugadores/:id/temporadaposterior', nbaService.getAllPostSeasonPlayerById);
    app.get('/estadisticas/:id/juegos', nbaService.getAllGameStatisticsPlayerById);
    app.get('/estadisticas/sociales', nbaService.getAllSocialStatisticsPlayerById);

    app.get('/teams/', nbaService.getAllTeams);

    app.use('/temporadas', router);
    app.use('/jugadores', router);
    app.use('/jugadores/:id/perfil', router);
    app.use('/jugadores/:id/temporadaregular', router);
    app.use('/jugadores/:id/temporadaposterior', router);
    app.use('/estadisticas/:id/juegos', router);
    app.use('/estadisticas/sociales', router);
    app.use('/teams', router);
};