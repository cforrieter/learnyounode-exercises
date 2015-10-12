var filter = require('./6_module');

filter(process.argv[2], process.argv[3], function(err, filteredList){
  if(err){
    return false;
  }

  filteredList.forEach(function(file){
    console.log(file);
  })
});
