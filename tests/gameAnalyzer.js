var chai = require('chai');
var expect = chai.expect;
var gameAnalyzer = require('../parser/gameAnalyzer.js');

describe('notReceivedParam', function() {
  it('should return an error if no param was passed', function() {
    var gameAnalysis = gameAnalyzer();
    expect(gameAnalysis).to.equal('No game to analyze!');
  });
})

describe('notReceivedArray', function() {
  it('should return an error if the parameter is not an array', function() {
    var gameAnalysisObject = gameAnalyzer({});
    var gameAnalysisString = gameAnalyzer('');
    expect(gameAnalysisObject).to.equal('Parameter is not an array!');
    expect(gameAnalysisString).to.equal('Parameter is not an array!');
  })
});

describe('isGood', function() {
  it('should return an object if the parameter passed is a fine array of games', function() {
    var gameAnalysis = gameAnalyzer([]);
    expect(typeof(gameAnalysis)).to.equal('object');
  })
});
