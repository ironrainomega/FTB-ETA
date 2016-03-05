var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use('/thirdparty', express.static("thirdparty"));
app.use('/js', express.static("js"));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.broadcast.emit('connected');
});

var port = process.env.PORT || 1337;
http.listen(port, function () {
    console.log('listening on *:'+port);
});