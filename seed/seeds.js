const sequelize = require("../config/connection");
const seedUsers = require("./usersData.json");
const seedsWines = require("./winesData.json");
const seedOrders = require("./orders.json");

const { User, Wine, Order } = require("../models");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await User.bulkCreate(seedUsers, {
    individualHooks: true,
    returning: true,
  });
  await Wine.bulkCreate(seedsWines);
  await Order.bulkCreate(seedOrders);
};

seedAll();
