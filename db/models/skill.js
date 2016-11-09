"use strict";

module.exports = function(sequelize, DataTypes) {
  var Skill = sequelize.define('Skill', {
      name:
      {
          type: DataTypes.STRING,
      },
      description:
      {
          type: DataTypes.TEXT,
      },
      key_attribute:
      {
          type: DataTypes.STRING,
      },
      can_use_untrained:
      {
          type: DataTypes.BOOLEAN,
          defaultValue: true
      }
  });

  return Skill;
};
