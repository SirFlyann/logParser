var chai = require('chai');
var expect = chai.expect;
var getPlayers = require('../parser/getPlayers.js');
var fs = require('fs');
var path = require('path');
var gameAnalyzer = require('../parser/gameAnalyzer.js');

describe('getPlayers_NotReceivedGame', function() {
  it('should return an error if no param was passed', function() {
    var players = getPlayers();
    expect(players).to.equal('No game to get players from!');
  });
})

describe('getPlayers_ParameterIsNotString', function() {
  it('should return an error if the parameter is not a string', function() {
    var playersObject = getPlayers({});
    var playersArray = getPlayers([]);
    var playersInteger = getPlayers(1);
    expect(playersObject).to.equal('Parameter is not a string!');
    expect(playersArray).to.equal('Parameter is not a string!');
    expect(playersInteger).to.equal('Parameter is not a string!');
  })
});

describe('getPlayers_ValidGameReceived', function() {
  it('should return an array if a valid game', function() {
    var data = fs.readFileSync(path.join(__dirname, 'files/games.log'), {encoding: 'utf-8'});
    var games = data.split(/InitGame/);
    games.shift();
    var players = getPlayers(games[0]);
    expect(players).to.be.an('array');
  });
});
