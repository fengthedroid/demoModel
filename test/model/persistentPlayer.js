var PersistentPlayer = require('../../model/persistentPlayer');
var ObjectID = require('mongodb').ObjectID;
var should = require('should');

var goodPP = {
  inGameName: 'good name',
  gameID: new ObjectID()
};

var badPP = {
  inGameName: 'bad name',
  gameID: new ObjectID(),
  extraValue: 'extra'
};

describe('Game model', function() {

  it('should create', function() {
    PersistentPlayer.create(goodPP, function(err, data){
      should.not.exist(err);
      data.should.eql(goodPP);
    });
  });

  it('should not create', function() {
    PersistentPlayer.create(badPP, function(err, data){
      should.exist(err);
      should.not.exist(data);
    });
  });
});