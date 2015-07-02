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
  var isValid = validator.validate(persistentPlayerEntity, persistentPlayerSchema);
  console.log(isValid);
  if (!isValid) {
    return cb(new Error('Create Error!'))
  }
  return mockDB.insert(persistentPlayerEntity, cb);
};

var update = function(persistentPlayerEntity, cb) {
  var isValid = validator.validate(persistentPlayerEntity, persistentPlayerSchema);
  console.log(isValid);
  if (!isValid) {
    return cb(new Error('Update Error!'))
  }
  return mockDB.update(persistentPlayerEntity, cb);
};

module.exports = {
  create: create,
  update: update
};