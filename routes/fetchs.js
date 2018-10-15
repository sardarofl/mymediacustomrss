const express = require('express');
const router = express.Router();
const config = require('../config/database');
const mongoose = require('mongoose');
const Fetch = require('../models/fetch');


//fetch
router.get('/fetch_feeds',function(req,res){
	Fetch.getFeeds(function(err,callback){
		if(err) return res.json({success:false, msg:'Failed to find feeds'});
				 res.json(callback);
     });
});


module.exports = router;
