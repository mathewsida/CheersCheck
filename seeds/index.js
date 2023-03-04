const sequelize = require('../config/connection');

const seedLiquor = require('./liquor-seeds');
const seedUsers = require('./user-seeds');
const seedComments = require('./comment-seeds');
const seedInventory = require('./inventory-seeds');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');

    await seedLiquor();
    console.log('\n----- LIQUORS SEEDED -----\n');

    await seedInventory();
    console.log('\n----- INVENTORY SEEDED -----\n');

    await seedComments();
    console.log('\n----- COMMENTS SEEDED -----\n');

    process.exit(0);
};

seedAll();
