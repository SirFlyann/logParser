module.exports = function (games) {
  var response = {};
  games.forEach(function(el, i) {
    var getKills = require('./getKills.js');
    var getPlayers = require('./getPlayers.js');
    var getScore = require('./getScore.js');

    var kills = getKills(el);
    var players = getPlayers(el);
    var score = getScore(el);

    var objName = 'game_' + i;
    var obj = {
      'total_kills': kills,
      'players': players,
      'kills': score
    };
    response[objName] = obj;
  });
  return response;
} 
