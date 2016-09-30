"use strict";

module.exports = function(sequelize, DataTypes) {
  var SpellRange = sequelize.define('SpellRange', {
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
            SpellRange.belongsToMany(models.Spell, {through: 'SpellRangeInstances'})
         }
      }
  });

  return SpellRange;
};
