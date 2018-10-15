const config = require('../config/database');
const mysql = require('mysql');
const mongoose = require('mongoose');
const Feed_schema = require('./feed_schemas');
const Event_schema = require('./event_schemas');
const Place_schema = require('./place_schemas');
const Group_schema = require('./group_schemas');
const AccountsSchema = require('./accounts_schemas');
const Fetch = require('../models/fetch');

const Fetch_Items={

  getFeeds : function( callback){
    Feed_schema.find(callback);
  }
};


module.exports=Fetch_Items;
