"use strict";

module.exports = function(sequelize, DataTypes) {
  var UserTypes = sequelize.define('UserTypes', {
      name: DataTypes.STRING,
  });

  UserTypes.sync({force: true})
  .then(function () { return UserTypes.create({ name: 'Normal' }); })
  .then(function () { return UserTypes.create({ name: 'Admin' }); });

  return UserTypes;
};
