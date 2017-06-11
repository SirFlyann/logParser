var chai = require('chai');
var expect = chai.expect;
var getGameKills = require('../parser/getGameKills.js');
var fs = require('fs');
var path = require('path');

describe('getGameKills_NotReceivedGame', function() {
  it('should return an error if no param was passed', function() {
    var kills = getGameKills();
    expect(kills).to.equal('No game to get kills from!');
  });
})

describe('getGameKills_ParameterIsNotString', function() {
  it('should return an error if the parameter is not a string', function() {
    var playersObject = getGameKills({});
    var playersArray = getGameKills([]);
    var playersInteger = getGameKills(1);
    expect(playersObject).to.equal('Parameter is not a string!');
    expect(playersArray).to.equal('Parameter is not a string!');
    expect(playersInteger).to.equal('Parameter is not a string!');
  })
});

describe('getGameKills_ValidGameReceived', function() {
  it('should return a number if a valid game', function() {
    var data = fs.readFileSync(path.join(__dirname, 'files/games.log'), {encoding: 'utf-8'});
    var games = data.split(/InitGame/);
    games.shift();
    var players = getGameKills(games[0]);
    expect(players).to.be.a('number');
  });
});
