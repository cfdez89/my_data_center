/*
 *Carlos Fernández Jiménez 
 *my_data_center basic app for software design course
 *View model response object
*/

'use strict'

function set(success, message, data){
    return JSON.stringify({
    	success: success,
    	message: message,
        data: data
    });
};

module.exports = {
    set: set
};


