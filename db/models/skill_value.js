"use strict";

module.exports = function(sequelize, DataTypes) {
  var SkillValue = sequelize.define('SkillValue', {
      value:
      {
          type: DataTypes.INTEGER,
      },
  }, {
      classMethods: {
         associate: function(models) {
            SkillValue.hasOne(models.Skill);
            SkillValue.belongsToMany(models.Monster, { through: 'MonsterSkillValueInstances' });
         }
      }
  });

  return SkillValue;
};
