var debug = require('debug')('glint:socket.io');
var io = require('socket.io-client');

exports = module.exports = function (o) {
  var o = o || {};
  o.server = o.server || window.location.origin;

  // socket.io creates and reuses the manager after it has been called the first time.
  var socket = io(o.server, o);

  socket.on('connect', function () {
    debug('connect');
  });

  socket.on('event', function (data) {
    debug('event', data);
  });

  socket.on('disconnect', function () {
    debug('disconnect');
  });

  return socket;

};

exports.io = io;

