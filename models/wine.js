const sequelize = require("../config/connection.js");
const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");

const wine = sequelize.define("wine", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  brand: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  taste: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },

  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: "wine",
});

module.exports = wine;
