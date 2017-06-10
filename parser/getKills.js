module.exports = function (el) {
  var kills = (el.match(/.*\skilled\s.*/g) || []).map(function(kill) {
    var separation = kill.split('killed');
    var killer = separation[0].split(/[0-9]+\s[0-9]+\s[0-9]+:/g).slice(-1)[0].trim();
    var victim = separation.slice(-1)[0].split(' by')[0].trim();
    return [killer, victim];
  });
  return kills;
}
