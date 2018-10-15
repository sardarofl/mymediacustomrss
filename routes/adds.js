const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Add = require('../models/add');
const passport = require('passport');
const jwt = require('jsonwebtoken');



router.post('/add_feed',function(req,res){
	var req = req;
	var res = res;

	  Add.addFeed(req,res, (err) =>{
	    if(err){
	     res.json({success:false, msg:'Failed to upload'});
	    }else{
	     res.json({success:true, msg:'uploaded'});
	    }
	  });
});






module.exports = router;
