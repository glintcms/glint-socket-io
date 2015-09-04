
var debug = require('debug')('glint:socket.io');
var IO = require('socket.io');

exports = module.exports = function (server, sessionStore, options) {

  var io = IO(server, options);

  // attach sessions to pure websocket requests
  io.use(function (socket, next) {

    var req = socket.request, res = {};
    sessionStore(req, res, next);

  });

  io.on('connection', function (socket) {
    var session = socket.request.session;
    debug('connection');

    socket.on('event', function (data) {
      debug('event', data);
    });

    socket.emit('event', {connection: 'initialized'});

  });

  return io;

};

