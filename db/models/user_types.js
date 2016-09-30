"use strict";

module.exports = function(sequelize, DataTypes) {
  var UserTypes = sequelize.define('UserTypes', {
      name: DataTypes.STRING,
  });

  return UserTypes;
};
