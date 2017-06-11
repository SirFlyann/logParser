'use strict';
// API lib
var Hapi = require('hapi');

// lib to manipulate paths with node
var path = require('path');

// function that manipulates the log file
var read = require('./parser/read.js');

var server = new Hapi.Server();
server.connection({
  port: 3000, 
  host: 'localhost'
});

server.route({
  method: 'GET',
  path: '/',
  handler: function (request, reply) {
    // Getting the path to the log
    var filePath = path.join(__dirname, 'games.log');

    // Opening the file and manipulating it;
    var response = read(filePath);
    reply(response);
  }
})

server.start(function(error) {
  if (error) {
    throw error;
  }
  
  console.log('Server running at: ' + server.info.uri);
});
