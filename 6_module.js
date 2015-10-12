var fs = require('fs');
module.exports = function(dirName, fileExt, callback){

  fs.readdir(dirName, function(err, list){
    if(err)
      return callback(err);

    var filtered = list.filter(function(file){
      files = file.split('.');    
      return (files[1] == fileExt)
    });
    return callback(null, filtered);
  });
}

