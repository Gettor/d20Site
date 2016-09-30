"use strict";

module.exports = function(sequelize, DataTypes) {
  var Attribute = sequelize.define('Attribute', {
      str:
      {
          type: DataTypes.INTEGER,
          defaultValue: 3
      },
      dex:
      {
          type: DataTypes.INTEGER,
          defaultValue: 3
      },
      con:
      {
          type: DataTypes.INTEGER,
          defaultValue: 3
      },
      wis:
      {
          type: DataTypes.INTEGER,
          defaultValue: 3
      },
      int:
      {
          type: DataTypes.INTEGER,
          defaultValue: 3
      },
      cha:
      {
          type: DataTypes.INTEGER,
          defaultValue: 3
      }
  }, {
      classMethods: {
         associate: function(models) {
            Attribute.hasMany(models.Monster)
         }
      }
  });

  return Attribute;
};
