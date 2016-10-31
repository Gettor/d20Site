"use strict";

module.exports = function(sequelize, DataTypes) {
  var SpellType = sequelize.define('SpellType', {
      name:
      {
          type: DataTypes.STRING,
      },
      description:
      {
          type: DataTypes.TEXT,
      },
  });

  return SpellType;
};
