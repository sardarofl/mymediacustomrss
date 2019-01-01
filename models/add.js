const config = require('../config/database');
var multer  =   require('multer');
var moment  =   require('moment');
var path = require('path');
const mongoose = require('mongoose');
const Feed_schema = require('./feed_schemas');
const Event_schema = require('./event_schemas');
const Place_schema = require('./place_schemas');
const Group_schema = require('./group_schemas');
const AccountsSchema = require('./accounts_schemas');

//multer
var filename_path;

var storage =   multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './uploads');
  },

  filename: function (req, file, callback) {
    ////console.log(req);
    filename_path=file.fieldname + '-' + Date.now()+path.extname(file.originalname);
    callback(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname));
  }
});


var upload = multer({ storage : storage}).single('image');
var multiple_upload = multer({ storage : storage}).array('image');

//adding items

const Add_Items={
  addFeed:function(req,res, callback){
    multiple_upload(req,res,function(err) {
        console.log(req);
        //console.log("Adding Room");
    let newFeed = new Feed_schema({
      title:req.body.title,
      description:req.body.description,
      image:req.files[0].originalname,
      image_path:req.files[0].filename,
      background:req.files[1].originalname,
      background_path:req.files[1].filename
    });

      newFeed.save( callback, function (err, docs) {
        if (err){
            return console.error(err);
        } else {
          //console.log("Room inserted to Collection");
        }
      });
    });
  }
};


module.exports=Add_Items;
