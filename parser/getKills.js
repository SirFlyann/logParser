module.exports = function (el) {
  // in each game, see how many lines start with the word "Kill". 
  return (el.match(/Kill/g) || []).length;
}
