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
    PersistentPlayer.create(goodPP, function(err, data) {
      should.not.exist(err);
      data.should.eql(goodPP);
    });
  });

  it('should not create', function() {
    PersistentPlayer.create(badPP, function(err, data) {
      should.exist(err);
      should.not.exist(data);
    });
  });

  it('should update', function() {
    var updatePP = {
      _id: new ObjectID(),
      email: 'updated email'
    };
    PersistentPlayer.update(updatePP, function(err, data) {
      should.not.exist(err);
      data.should.eql(updatePP);
    });
  });

  it('should update again', function() {
    var updatePP = {
      _id: new ObjectID(),
      inGameName: 'new name'
    };
    PersistentPlayer.update(updatePP, function(err, data) {
      should.not.exist(err);
      data.should.eql(updatePP);
    });
  });

  it('should not update', function() {
    PersistentPlayer.update({
      inGameName: 'new name'
    }, function(err, data) {
      should.exist(err);
      should.not.exist(data);
    });
  });

  it('should not update again', function() {
    PersistentPlayer.update({ _id: 'lollololo', inGameName: 'new name', extra: 'extra stuff' }, function(err, data) {
      should.exist(err);
      should.not.exist(data);
    });
  });

  it('should not update again again', function() {
    PersistentPlayer.update({ inGameName: 456, extra: 'extra stuff' }, function(err, data) {
      should.exist(err);
      should.not.exist(data);
    });
  });
});