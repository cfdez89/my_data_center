/*
 *Carlos Fernández Jiménez 
 *my_data_center basic app for software design course
 *Access to mock databse
*/

var fs   = require('fs'),
    path = require('path');

var readMockDB = function(file) {

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

var filePath = path.join(__dirname, 'mockDB.json');

function getAllSeasons() {

    var db = readMockDB(filePath);
    if(db.players == undefined) {
        return {
            status: false, 
            message: 'No se  ha obtenido los jugadores',
            data: {}
        } 
    }
    return {
        status: true, 
        message: 'Se ha obtenido todos los jugadores de manera correcta',
        data: db.players
    }
};

function getAllPlayers() {

    var db = readMockDB(filePath);
    if(db.players == undefined) {
        return {
            status: false, 
            message: 'No se  ha obtenido los jugadores',
            data: {}
        } 
    }
    return {
        status: true, 
        message: 'Se ha obtenido todos los jugadores de manera correcta',
        data: db.players
    }
};

function getPlayerById() {

    var db = readMockDB(filePath);
    if(db.players == undefined) {
        return {
            status: false, 
            message: 'No se  ha obtenido los jugadores',
            data: {}
        } 
    }
    return {
        status: true, 
        message: 'Se ha obtenido todos los jugadores de manera correcta',
        data: db.players
    }
};

function getAllRegularSeasonPlayerById() {

    var db = readMockDB(filePath);
    if(db.players == undefined) {
        return {
            status: false, 
            message: 'No se  ha obtenido los jugadores',
            data: {}
        } 
    }
    return {
        status: true, 
        message: 'Se ha obtenido todos los jugadores de manera correcta',
        data: db.players
    }
};

function getAllPostSeasonPlayerById() {

    var db = readMockDB(filePath);
    if(db.players == undefined) {
        return {
            status: false, 
            message: 'No se  ha obtenido los jugadores',
            data: {}
        } 
    }
    return {
        status: true, 
        message: 'Se ha obtenido todos los jugadores de manera correcta',
        data: db.players
    }
};

function getAllGameStatisticsPlayerById() {

    var db = readMockDB(filePath);
    if(db.players == undefined) {
        return {
            status: false, 
            message: 'No se  ha obtenido los jugadores',
            data: {}
        } 
    }
    return {
        status: true, 
        message: 'Se ha obtenido todos los jugadores de manera correcta',
        data: db.players
    }
};

function getAllSocialStatisticsPlayerById() {
 
    var db = readMockDB(filePath);
    if(db.players == undefined) {
        return {
            status: false, 
            message: 'No se  ha obtenido los jugadores',
            data: {}
        } 
    }
    return {
        status: true, 
        message: 'Se ha obtenido todos los jugadores de manera correcta',
        data: db.players
    }
};


module.exports = {
    getAllSeasons: getAllSeasons,
    getAllPlayers: getAllPlayers,
    getPlayerById: getPlayerById,
    getAllRegularSeasonPlayerById: getAllRegularSeasonPlayerById,
    getAllPostSeasonPlayerById: getAllPostSeasonPlayerById,
    getAllGameStatisticsPlayerById: getAllGameStatisticsPlayerById,
    getAllSocialStatisticsPlayerById: getAllSocialStatisticsPlayerById
};