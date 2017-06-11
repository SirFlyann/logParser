var path = require('path');
var chai = require('chai');
var expect = chai.expect;
var read = require('../parser/read.js');

describe('read_NoFile', function() {
  it('should return an error if a file is not passed', function() {
    var readFile = read();
    expect(readFile).to.equal('Path must exist!');
  });
});

describe('read_IsNotLog', function() {
  it('should return an error if the file passed is not a log', function() {
    var readFile = read(path.join(__dirname, 'files/fakeLog.txt'));
    expect(readFile).to.equal('File must be a log file!');
  });
});

describe('read_IsNotQuake', function() {
  it('should return an error if the file passed is not a quake log', function() {
    var readFile = read(path.join(__dirname, 'files/fakeLog.log'));
    expect(readFile).to.equal('Log must be a Quake file!');
  });
});
