"use strict";

module.exports = function(sequelize, DataTypes) {
  var Save = sequelize.define('Save', {
      will:
      {
          type: DataTypes.INTEGER,
          defaultValue: 3
      },
      reflex:
      {
          type: DataTypes.INTEGER,
          defaultValue: 3
      },
      fortitude:
      {
          type: DataTypes.INTEGER,
          defaultValue: 3
      }
  }, {
      classMethods: {
         associate: function(models) {
            Save.hasMany(models.Monster)
         }
      }
  });

  return Save;
};
