const mongoose = require('mongoose');

//Room schema
const FeedSchema = mongoose.Schema({
  title:{
    type:String
  },
  description:{
    type:String
  },
  image:{
    type:String
  },
  image_path:{
    type:String
  },
  background:{
    type:String
  },
  background_path:{
    type:String
  }
});


module.exports = mongoose.model('Feed', FeedSchema);
