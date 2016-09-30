"use strict";

module.exports = function(sequelize, DataTypes) {
  var Attack = sequelize.define('Attack', {
      name: DataTypes.STRING,
      attack_bonus:
      {
          type: DataTypes.INTEGER,
          defaultValue: 0
      },
      hd_type:
      {
          type: DataTypes.INTEGER,
          defaultValue: 2
      },
      hd_amount:
      {
          type: DataTypes.INTEGER,
          defaultValue: 1
      },
      damage_bonus:
      {
          type: DataTypes.INTEGER,
          defaultValue: 0
      },
      crit_threat:
      {
          type: DataTypes.INTEGER,
          defaultValue: 20
      },
      crit_multiplier:
      {
          type: DataTypes.INTEGER,
          defaultValue: 2
      },
      range:
      {
          type: DataTypes.INTEGER,
          defaultValue: 0
      },
      type:
      {
          type: DataTypes.STRING,
          defaultValue: "Physical"
      }
  }, {
      classMethods: {
         associate: function(models) {
            Attack.hasMany(models.Monster)
         }
      }
  });

  return Attack;
};
