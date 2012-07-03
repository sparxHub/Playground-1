var app = require('express').createServer()
  , io = require('socket.io').listen(app);

app.listen(8001);

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/picker.html');
});

io.sockets.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});