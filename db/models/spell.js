"use strict";

module.exports = function(sequelize, DataTypes) {
  var Spell = sequelize.define('Spell', {
      name:
      {
          type: DataTypes.STRING
      },
      description:
      {
          type: DataTypes.TEXT
      },
      level:
      {
          type: DataTypes.INTEGER
      },
      level_class:
      {
          type: DataTypes.TEXT
      },
      save_type:
      {
          type: DataTypes.INTEGER,
          defaultValue: 0
      },
      permits_sr:
      {
          type: DataTypes.BOOLEAN,
          defaultValue: false
      }
  }, {
      classMethods: {
         associate: function(models) {
            Spell.hasOne(models.SpellRange),
            Spell.belongsTo(models.Monster, {through: 'MonsterSpellInstances'})
         }
      }
  });

  return Spell;
};
