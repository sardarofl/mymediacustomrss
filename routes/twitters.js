const express = require('express');
const router = express.Router();
const config = require('../config/database');
//const Twitter = require('../models/twitter');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const twit = require('twitter');
let cache = [];
let cacheAge = 0;
const client = new twit({
  consumer_key:'3z1UN1MQ53q8smKfz4uzVCLNt',
    consumer_secret:'lsoAcqJa0kTqIA89R4huQW1Y5rIWaQrYPwTVK5e2QUMZXTdPbo',
    access_token_key:'1059828093169360896-wvT7KhkGQrJNj3kvbLrdZlrYUapmCB',
    access_token_secret:'EoAfnUMqtCwAlTuRUSGdw0ZbBzmbYSQeqCWHvYc9XIeWL'
});
// router.get('/read_tweets',function(req,res){
// 	var req = req;
// 	var res = res;

// 	Twitter.getTweets(req,res, (err) =>{
// 	    if(err){
// 	     res.json({success:false, msg:'Failed to upload'});
// 	    }else{
// 	     res.json({success:true, msg:'uploaded'});
// 	    }
// 	  });
// });

// router.get('/read_tweets',function(req,res){
// 	Twitter.getTweets(function(err,callback){
// 		console.log(callback)
// 		if(err) return res.json({success:false, msg:'Failed to find feeds'});
// 				 res.json(callback);
//      });
// });

router.get('/read_tweets', (req, res) => {
  if (Date.now() - cacheAge > 60000) {
    cacheAge = Date.now();
    const params = { tweet_mode: 'extended', count: 200 };
    if (req.query.since) {
      params.since_id = req.query.since;
    }
    client
      .get(`statuses/home_timeline`, params)
      .then(timeline => {
        cache = timeline;
        res.send(timeline);
      })
      .catch(error => res.send(error));
  } else {
    res.send(cache);
  }
});
module.exports = router;
