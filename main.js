// lib to manipulate paths with node
var path = require('path');

// function that manipulates the log file
var read = require('./parser/read.js');

// Getting the path to the log
filePath = path.join(__dirname, 'games.log');

// Opening the file and manipulating it;
var response = read(filePath);

console.log(response);
