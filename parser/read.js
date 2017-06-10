module.exports = function(filePath) {
  // lib to manipulate files with node
  var fs = require('fs');

  fs.readFile(filePath, {encoding: 'utf-8'}, function(err, data) {
    if (!err) {
      // This is the function that returns the analysis from the games
      var gameAnalyzer = require('./gameAnalyzer.js');
      // Split each game
      var games = data.split(/InitGame/);
      // Dump the first element of the array. It is useless
      games.shift();
      var response = gameAnalyzer(games);
    } else {
      var response = err;
    }
  });
  return response;
}
