var fs = require('fs');
var path = process.argv[2];
var extension = process.argv[3];

fs.readdir(path, function(err, list){
  list.forEach(function(file){
    files = file.split('.');    
    if(files[1] == extension){
      console.log(file);
    }
  });
});