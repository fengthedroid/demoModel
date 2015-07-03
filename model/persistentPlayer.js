var validator = require('tv4');
var persistentPlayerSchema = require('../schema/persistentPlayer.json');

var mockDB = {
  insert: function(entity, cb) {
    return cb(undefined, entity);
  },
  update: function(entity, cb) {
    return cb(undefined, entity);
  }
};

var create = function(persistentPlayerEntity, cb) {
  var result = validator.validateMultiple(persistentPlayerEntity, persistentPlayerSchema);
  console.log(result);
  if (!result.valid) {
    return cb(result)
  }
  return mockDB.insert(persistentPlayerEntity, cb);
};

var update = function(persistentPlayerEntity, cb) {
  var result = validator.validateMultiple(persistentPlayerEntity, persistentPlayerSchema);
  console.log(result);
  if (!result.valid) {
    return cb(result)
  }
  return mockDB.update(persistentPlayerEntity, cb);
};

module.exports = {
  create: create,
  update: update
};