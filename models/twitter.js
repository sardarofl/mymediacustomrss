const config = require('../config/database');
var multer  =   require('multer');
var moment  =   require('moment');
var path = require('path');
const mongoose = require('mongoose');
const twit = require('twitter');

twitter = new twit({
    consumer_key:'3z1UN1MQ53q8smKfz4uzVCLNt',
    consumer_secret:'lsoAcqJa0kTqIA89R4huQW1Y5rIWaQrYPwTVK5e2QUMZXTdPbo',
    access_token_key:'1059828093169360896-wvT7KhkGQrJNj3kvbLrdZlrYUapmCB',
    access_token_secret:'EoAfnUMqtCwAlTuRUSGdw0ZbBzmbYSQeqCWHvYc9XIeWL'
});

const Tweets_Items={
    getTweets:function( callback){
      
        console.log("getting tweerts")
        twitter.get('statuses/home_timeline', function(error, tweets,response) {
            
            console.log(tweets);  // The favorites.
             //callback(response);  // Raw response object.
          }).then(tweets => callback.send(tweets));
  }
};


module.exports=Tweets_Items;
