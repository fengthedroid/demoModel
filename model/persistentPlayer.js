var validator = require('tv4');
var persistentPlayerSchema = require('../schema/persistentPlayer.json');
var ObjectID = require('mongodb').ObjectID;

var results = validator.validateMultiple({
  inGameName: 'foo',
  gameID: new ObjectID(),
  extraValue: 'extra'
}, persistentPlayerSchema);

console.log('results', results);