"use strict";

module.exports = function(sequelize, DataTypes) {
  var Developer = sequelize.define(
    "Developer",
    {
      developer_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      dev_org: {
        type: DataTypes.STRING
      },
      dev_type: {
        type: DataTypes.STRING
      },
      phone: {
        type: DataTypes.STRING
      },
      address: {
        type: DataTypes.STRING
      },
      devoured: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      }
    },
    {
      timestamps: false
    }
  );
  return Developer;
};
