"use strict";

module.exports = function(sequelize, DataTypes) {
  var Notepad = sequelize.define('Notepad', {
      name: DataTypes.STRING,
  }, {
      classMethods: {
         associate: function(models) {
            Notepad.hasOne(models.User)
         }
      }
  });

  return Notepad;
};
