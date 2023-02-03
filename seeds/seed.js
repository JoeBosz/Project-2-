import sequelize = from '../config/connection'
import seedUsers = from './usersData.json'
import seedsWines = from './winesData.json'
import seedOrders = from './orders.json'

import sequelize = from '../config/connection'

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  await seedsWines();
  console.log('\n----- WINES SEEDED -----\n');

  await seedOrders();
  console.log('\n----- ORDERS SEEDED -----\n');

  process.exit(0);
};

seedAll();


