"use strict";
var bcrypt = require("bcrypt-nodejs");

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
      login: DataTypes.STRING,
      password: DataTypes.STRING,
  }, {
      classMethods: {
        associate: function(models) {
          User.hasOne(models.UserTypes)
        },
      },
      instanceMethods: {
        setPassword: function(password) {
          this.password = bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
        },
        verifyPassword: function(password) {
          return bcrypt.compareSync(password, this.password);
        }
      },
  });

  return User;
};
