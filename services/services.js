/*
 *Carlos Fernández Jiménez 
 *my_data_center basic app for software design course
 *Access services
*/

/* import services modules */

var nbaRepository = require('../repository/repository.js');

exports.getAllSeasons = function(request, response) {
    var data = nbaRepository.getAllPlayers();
    response.status(200);
    response.send(data);
};

exports.getAllPlayers = function(request, response) {
    var data = nbaRepository.getAllPlayers();
    response.status(200);
    response.send(data);
};

exports.getPlayerById = function(request, response) {
    var id = request.params.id;
    var data = nbaRepository.getPlayerById(id);
    response.status(200);
    response.send(data);
};

exports.getAllRegularSeasonPlayerById = function(request, response) {
    var data = nbaRepository.getAllPlayers();
    response.status(200);
    response.send(data);
};

exports.getAllPostSeasonPlayerById = function(request, response) {
    var data = nbaRepository.getAllPlayers();
    response.status(200);
    response.send(data);
};

exports.getAllGameStatisticsPlayerById = function(request, response) {
    var data = nbaRepository.getAllPlayers();
    response.status(200);
    response.send(data);
};

exports.getAllSocialStatisticsPlayerById = function(request, response) {
    var data = nbaRepository.getAllPlayers();
    response.status(200);
    response.send(data);
};

exports.getAllTeams = function(request, response) {
    var data = nbaRepository.getAllTeams();
    response.status(200);
    response.send(data);
};