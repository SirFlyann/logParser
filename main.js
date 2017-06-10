// lib to manipulate files with node
var fs = require('fs');

// lib to manipulate paths with node
var path = require('path');

// function that manipulates the log file
var read = require('./parser/read.js');

// Getting the path to the log
filePath = path.join(__dirname, 'games.log');
// Opening the file and manipulating it;
fs.readFile(filePath, {encoding: 'utf-8'}, read);
