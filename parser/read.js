module.exports = function(err, data) {
  // This is the function that returns the analysis from the games
  var gameAnalyzer = require('./gameAnalyzer.js');
  if (!err) {
    // Split each game
    var games = data.split(/InitGame/);
    // Dump the first element of the array. It is useless
    games.shift()
    var response = gameAnalyzer(games);
    console.log(response);
  } else {
     console.log(err);
  }
}
