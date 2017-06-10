module.exports = function (games) {
  var response = {};
  games.forEach(function(el, i) {
    // function that returns the number of kills in each match
    var getGameKills = require('./getGameKills.js');
    // function that returns an array of all the players present in the game
    var getPlayers = require('./getPlayers.js');
    // function that returns each player's individual score
    var getScore = require('./getScore.js');

    var gameKills = getGameKills(el);
    var players = getPlayers(el);
    var score = getScore(el);

    // define the object name
    var objName = 'game_' + i;
    // setting obj up
    var obj = {
      'total_kills': gameKills,
      'players': players,
      'kills': score
    };
    // inserting the game analysis into the response obj
    response[objName] = obj;
  });
  return response;
} 
