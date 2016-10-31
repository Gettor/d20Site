"use strict";

module.exports = function(sequelize, DataTypes) {
  var Class = sequelize.define('Class', {
      name:
      {
          type: DataTypes.STRING
      },
  });

  return Class;
};
