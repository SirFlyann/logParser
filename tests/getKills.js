var chai = require('chai');
var expect = chai.expect;
var getKills = require('../parser/getKills.js');
var fs = require('fs');
var path = require('path');

describe('getKills_NotReceivedGame', function() {
  it('should return an error if no param was passed', function() {
    var kills = getKills();
    expect(kills).to.equal('No game to get kills from!');
  });
})

describe('getKills_ParameterIsNotString', function() {
  it('should return an error if the parameter is not a string', function() {
    var killsObject = getKills({});
    var killsArray = getKills([]);
    var killsInteger = getKills(1);
    expect(killsObject).to.equal('Parameter is not a string!');
    expect(killsArray).to.equal('Parameter is not a string!');
    expect(killsInteger).to.equal('Parameter is not a string!');
  })
});

describe('getKills_ValidGameReceived', function() {
  it('should return a number if a valid game', function() {
    var data = fs.readFileSync(path.join(__dirname, 'files/games.log'), {encoding: 'utf-8'});
    var games = data.split(/InitGame/);
    games.shift();
    var kills = getKills(games[0]);
    expect(kills).to.be.an('array');
  });
});
