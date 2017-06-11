module.exports = function(filePath) {
  // lib to manipulate files with node
  var fs = require('fs');

  // lib to manipulate paths with node
  var path = require('path');

  // This is the function that returns the analysis from the games
  var gameAnalyzer = require('./gameAnalyzer.js');

  if ((typeof(filePath) === 'undefined') || (!fs.existsSync(filePath))) {
    return 'Path must exist!';
  }

  if (path.extname((String)(filePath)) !== '.log') {
    return 'File must be a log file!';
  }

  var data = fs.readFileSync(filePath, {encoding: 'utf-8'});

  var line = data.split('\n')[1];
  if (line.match(/InitGame/) == null) {
    return 'Log must be a Quake file!';
  }
  //console.log(typeof(line.match(/InitGame/)) == 'null')

  // Split each game
  var games = data.split(/InitGame/);
  //  Dump the first element of the array. It is useless
  games.shift();

  var response = gameAnalyzer(games);

  return response;
}
