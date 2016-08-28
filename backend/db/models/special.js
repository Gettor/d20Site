"use strict";

module.exports = function(sequelize, DataTypes) {
  var Special = sequelize.define('Special', {
      name:
      {
          type: DataTypes.STRING
      },
      description:
      {
          type: DataTypes.TEXT
      }
  }, {
      classMethods: {
         associate: function(models) {
            Special.hasMany(models.Monster)
         }
      }
  });

  return Special;
};
