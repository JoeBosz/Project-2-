const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class orders extends Model {}

Orders.init(
  {
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    date_ordered: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    arrival_time: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'orders',
  }
);

module.exports = orders;
