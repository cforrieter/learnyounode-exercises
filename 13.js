var http = require('http')
var url = require('url')

var server = http.createServer(function(req, res){
  var urlObj = url.parse(req.url, true)
  var api = urlObj.pathname.split('/')[2];
  var time = new Date(urlObj.query.iso)
  
  if(api == 'parsetime'){
    console.log(time)
    var hour = time.getHours();
    var minute = time.getMinutes();
    var second = time.getSeconds();
    var timeObj = {
      hour: hour,
      minute: minute,
      second: second
    }
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(timeObj))
  }else{
    var unix = {
      unixtime: time.getTime()
    }
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(unix))
  }
})

server.listen(process.argv[2])