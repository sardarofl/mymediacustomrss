const fs = require('fs');
const path = require('path');
const csvjson = require('csvjson');


var CSV_CONVERTER={

getCSVTansley:function(){


var data = fs.readFileSync(path.join(__dirname, '../csv/cobtansley.csv'), { encoding : 'utf8'});


var options = {
  delimiter : ',', // optional
  quote     : '"' // optional
};

	return(csvjson.toSchemaObject(data, options));

},
getCSVHaber:function(){


  var data = fs.readFileSync(path.join(__dirname, '../csv/cobhaber.csv'), { encoding : 'utf8'});
  
  
  var options = {
    delimiter : ',', // optional
    quote     : '"' // optional
  };
  
    return(csvjson.toSchemaObject(data, options));
  
  }
};
module.exports=CSV_CONVERTER;