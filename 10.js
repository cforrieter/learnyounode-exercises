var net = require('net')
var server = net.createServer(function (socket) {
  // socket handling logic
  var date = new Date();
  var day = ('0' + date.getMinutes()).slice(-2)

  socket.end(date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate() + " " + date.getHours() + ":" + day + '\n')
})

server.listen(process.argv[2])