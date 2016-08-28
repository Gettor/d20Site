"use strict";

module.exports = function(sequelize, DataTypes) {
  var SpellEffect = sequelize.define('SpellEffect', {
      group_id:
      {
          type: DataTypes.INTEGER
      },
      priority_id:
      {
          type: DataTypes.INTEGER
      },
      condition:
      {
          type: DataTypes.STRING,
          defaultValue: "None"
      },
      description:
      {
          type: DataTypes.TEXT
      },
      show_rng:
      {
          type: DataTypes.BOOLEAN,
          defaultValue: false
      }
  }, {
      classMethods: {
         associate: function(models) {
            SpellEffect.hasMany(models.Spell)
         }
      }
  });

  return SpellEffect;
};
