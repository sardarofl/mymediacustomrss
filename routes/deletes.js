const express = require('express');
const router = express.Router();
const config = require('../config/database');
const mongoose = require('mongoose');
const Delete = require('../models/delete');

//delete category


//delete from gallery
router.delete('/delete_feed/:id',function(req,res){
	var item = req.params.id;
	Delete.DeleteFromFeeds(item,res, function(err,callback){
		if(err) return res.json(err);
				 res.json(callback);
     });
});




module.exports = router;
