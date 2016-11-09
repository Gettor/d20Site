"use strict";

module.exports = function(sequelize, DataTypes) {
  var Monster = sequelize.define('Monster', {
      name: DataTypes.STRING,
      custom_description: DataTypes.TEXT,
      hd_type:
      {
          type: DataTypes.INTEGER,
          defaultValue: 4
      },
      hd_amount:
      {
          type: DataTypes.INTEGER,
          defaultValue: 1
      },
      hp: DataTypes.INTEGER,
      initiative:
      {
          type: DataTypes.INTEGER,
          defaultValue: 0
      },
      speed:
      {
          type: DataTypes.INTEGER,
          defaultValue: 9
      }
  }, {
      classMethods: {
         associate: function(models) {
            Monster.hasOne(models.Notepad);
            Monster.belongsToMany(models.Spell, { through: 'MonsterSpellInstances' });
            Monster.belongsToMany(models.SkillValue, { through: 'MonsterSkillValueInstances' });
         }
      }
  });

  return Monster;
};
