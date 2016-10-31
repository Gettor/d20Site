"use strict";

module.exports = function(sequelize, DataTypes) {
  var Spell = sequelize.define('Class', {
      name:
      {
          type: DataTypes.STRING
      },
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
