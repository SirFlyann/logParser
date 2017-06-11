module.exports = function (el) {
  // lib to remove duplicate items from arrays
  var unique = require('array-unique');

  var getKills = require('./getKills.js');

  if ((el == null) || (typeof(el) === 'undefined')) {
    return 'No game to get players from!'
  }

  if (typeof(el) !== 'string') {
    return 'Parameter is not a string!'
  }

  // First we search for lines that have this pattern: n\<Player name>\t\<random-number>
  var getPlayers = el.match(/n\\.+\\t\\[0-9]/g).map(function(line) {
    //For each line, remove the "n\" and the "\t\<random-number>"
    return line.replace("n\\", '').replace(/\\t\\[0-9]/, '');
  });

  // Not all the players change their info. By the same token, not all players have kills.
  // So we fuse both filters and voila
  var kills = getKills(el);
  var activePlayers = [];
  kills.forEach(function(kill) {
    if (kill[0] !== '<world>') {
      activePlayers.push(kill[0]);
    }
    if (kill[1] !== '<world>') {
      activePlayers.push(kill[1]);
    }
  })

  var allPlayers = getPlayers.concat(activePlayers);
  return unique(allPlayers);
}
