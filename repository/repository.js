/*
 *Carlos Fernández Jiménez 
 *my_data_center basic app for software design course
 *Access to mock databse
*/

var fs   = require('fs'),
    path = require('path');

/* import services modules */

var ViewModel = require('../utils/viewModel.js');

var filePath = path.join(__dirname, 'mockDB.json');

function readMockDB(file) {

    var file = fs.readFileSync(file);
    var data = {};

    try {
        data = JSON.parse(file);
    } 
    catch (err) {
        console.log(err);
    }
    return data;
};


function getAllSeasons() {

    var db = readMockDB(filePath);
    if(db.seasons === undefined) {
        return ViewModel.set(false, 'Seasons not found', {}); 
    }
    return ViewModel.set(true, 'Get seasons was successfull', db.seasons);
};

function getAllPlayers() {

    var db = readMockDB(filePath);
    if(db.players === undefined) {
        return ViewModel.set(false, 'Players not found', {});
    }
    return ViewModel.set(true, 'Get  all player was successfull', db.players);
};

function getPlayerById(pId) {

    var db = readMockDB(filePath);
    if(db.profiles === undefined) {
        return ViewModel.set(false, 'Player profile not found', {}); 
    }
    for (var i = 0; i < db.profiles.length ; i++) { 
        if(db.profiles[i].id === pId){ 
            return ViewModel.set(true, 'Get player profile was successfull', db.profiles[i]);
        }   
    };
    return ViewModel.set(false, 'Player profile not found', {}); 
};

function getAllRegularSeasonPlayerById(pId) {

    var db = readMockDB(filePath);
    if(db.profiles === undefined) {
        return ViewModel.set(false, 'Regular season stadistics  not found', {});  
    }
    for (var i = 0; i < db.profiles.length ; i++) { 
        if(db.profiles[i].id === pId){ 
            return ViewModel.set(true, 'Get regular season was successfull', db.profiles[i].temporadaRegular);
        }   
    };
    return ViewModel.set(false, 'Regular season stadistics player not found', {}); 
};

function getAllPostSeasonPlayerById(pId) {

    var db = readMockDB(filePath);
    if(db.players === undefined) {
        return ViewModel.set(false, 'Post season stadistics not found', {});  
    }
    for (var i = 0; i < db.profiles.length ; i++) { 
        if(db.profiles[i].id === pId){ 
            return ViewModel.set(true, 'Get post season was successfull', db.profiles[i].postTemporada);
        }   
    };
    return ViewModel.set(false, 'Post season stadistics player not found', {}); 
};
//corregir
function getAllGameStatisticsPlayerById() {

    var db = readMockDB(filePath);
    if(db.players === undefined) {
        return ViewModel.set(false, 'Player profile not found', {});  
    }
    return ViewModel.set(true, 'Get  all player was successfull', db.players);
};
//corregir
function getAllSocialStatisticsPlayerById() {
 
    var db = readMockDB(filePath);
    if(db.players === undefined) {
        return ViewModel.set(false, 'Player profile not found', {});  
    }
    return ViewModel.set(true, 'Get  all player was successfull', db.players);
};

function getAllTeams() {

    var db = readMockDB(filePath);
    if(db.teams === undefined) {
        return ViewModel.set(false, 'Team profile not found', {});  
    }
    return ViewModel.set(true, 'Get  all team profiles was successfull', db.teams);
};

module.exports = {
    getAllSeasons: getAllSeasons,
    getAllPlayers: getAllPlayers,
    getPlayerById: getPlayerById,
    getAllRegularSeasonPlayerById: getAllRegularSeasonPlayerById,
    getAllPostSeasonPlayerById: getAllPostSeasonPlayerById,
    getAllGameStatisticsPlayerById: getAllGameStatisticsPlayerById,
    getAllSocialStatisticsPlayerById: getAllSocialStatisticsPlayerById,
    getAllTeams: getAllTeams
};
