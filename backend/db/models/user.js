"use strict";

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
      login: DataTypes.STRING,
      password: DataTypes.STRING,
  }, {
      classMethods: {
        associate: function(models) {
          User.hasOne(models.UserTypes)
      }
    }
  });

  return User;
};
