import { DataTypes } from "sequelize";
import sequelize from "../conn.js";
import Users from "../users/model.js";

const wine = sequelize.define(
  "wine",
  {
    varietal: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    taste: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    wineId: {
      type: DataTypes.INTEGER,
      references: {
        model: Driver,
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
  }
);

export default Car;
