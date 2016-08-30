"use strict";

module.exports = function(sequelize, DataTypes) {
  var Armor = sequelize.define('Armor', {
      overall:
      {
          type: DataTypes.INTEGER,
          defaultValue: 10
      },
      touch:
      {
          type: DataTypes.INTEGER,
          defaultValue: 10
      },
      flat_footed:
      {
          type: DataTypes.INTEGER,
          defaultValue: 10
      }
  }, {
      classMethods: {
         associate: function(models) {
            Armor.hasOne(models.Monster)
         }
      }
  });

  return Armor;
};
