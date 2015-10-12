var fs = require('fs')
    
fs.readFile(process.argv[2], function(err, data){
  if(!err){
    var lines = data.toString().split('\n').length - 1;
    console.log(lines);    
  }
});



// note you can avoid the .toString() by passing 'utf8' as the
// second argument to readFileSync, then you'll get a String!
//
// fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1

