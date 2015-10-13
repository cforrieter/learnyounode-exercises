// var http = require('http');

// var url = process.argv[2];

// http.get(url, function(res){
//   var length = 0;
//   var text = ""
//   res.setEncoding("utf8");
//   res.on("data", function(data){
//     length += data.length;
//     text += data;
//   });
//   res.on("end", function(data){
//     console.log(length);
//     console.log(text);
//   })
// });


var http = require('http')
var bl = require('bl')

http.get(process.argv[2], function (response) {
  response.pipe(bl(function (err, data) {
    if (err)
      return console.error(err)
    data = data.toString()
    console.log(data.length)
    console.log(data)
  }))  
})