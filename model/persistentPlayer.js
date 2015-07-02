var validator = require('tv4');
var persistentPlayerSchema = require('../schema/persistentPlayer.json');

var mockDB = {
  insert: function(entity, cb) {
    return cb(undefined, entity);
  }
};

var create = function(persistentPlayerEntity, cb) {
  var isValid = validator.validate(persistentPlayerEntity, persistentPlayerSchema);
  if (!isValid) {
    return cb(new Error('Create Error!'))
  }
  return mockDB.insert(persistentPlayerEntity, cb);
};

module.exports = {
  create: create
};