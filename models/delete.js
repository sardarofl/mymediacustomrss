const config = require('../config/database');
//const mysql = require('mysql');
var path = require('path');
const mongoose = require('mongoose');
const Feed_schema = require('./feed_schemas');
const Event_schema = require('./event_schemas');
const Place_schema = require('./place_schemas');
const fs = require('fs');
//delete items

const Delete_Items={

  DeleteFromFeeds:function(item, res, callback){
 
    Feed_schema.remove({_id:item},callback);


  }

};


module.exports=Delete_Items;
