var chai = require('chai');
var expect = chai.expect;
var getScore = require('../parser/getScore.js');
var fs = require('fs');
var path = require('path');

describe('getScore_NotReceivedGame', function() {
  it('should return an error if no param was passed', function() {
    var score = getScore();
    expect(score).to.equal('No game to get score from!');
  });
})

describe('getScore_ParameterIsNotString', function() {
  it('should return an error if the parameter is not a string', function() {
    var scoreObject = getScore({});
    var scoreArray = getScore([]);
    var scoreInteger = getScore(1);
    expect(scoreObject).to.equal('Parameter is not a string!');
    expect(scoreArray).to.equal('Parameter is not a string!');
    expect(scoreInteger).to.equal('Parameter is not a string!');
  })
});

describe('getScore_ValidGameReceived', function() {
  it('should return an object if a valid game is passed', function() {
    var data = fs.readFileSync(path.join(__dirname, 'files/games.log'), {encoding: 'utf-8'});
    var games = data.split(/InitGame/);
    games.shift();
    var score = getScore(games[0]);
    expect(score).to.be.an('object');
  });
});
