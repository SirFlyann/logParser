module.exports = function(el) {
  var getKills = require('./getKills.js');
  var score = {}; 
  var kills = getKills(el);
  if (kills.length > 0) {
    kills.forEach(function(el) {
      var killer = (String)(el[0]);
      var victim = (String)(el[1]);
      // If the killer was <world>, the victim loses 1 point
      if (killer === '<world>') {
        score[victim] = score.hasOwnProperty(victim) ? score[victim] - 1 : -1;
      } else {
        // Else, the killer gets one point
        score[killer] = score.hasOwnProperty(killer) ? score[killer] + 1 : 1;
      }
    })
  } 
  return score;
}
