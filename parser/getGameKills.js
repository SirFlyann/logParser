module.exports = function (el) {

  if ((el == null) || (typeof(el) === 'undefined')) {
    return 'No game to get kills from!'
  }

  if (typeof(el) !== 'string') {
    return 'Parameter is not a string!';
  }

  // in each game, see how many lines start with the word "Kill". 
  return (el.match(/Kill/g) || []).length;
}
