const { Inventory } = require('../models');

const InventoryData = [
    {
        liquor_id: 1,
        user_id: '1',
        favorite: true,
    },
    {
        liquor_id: 2,
        user_id: '1',
        favorite: true,
    },
    {
        liquor_id: 3,
        user_id: '1',
        favorite: true,
    },
    {
        liquor_id: 4,
        user_id: '1',
        favorite: true,
    },
    {
        liquor_id: 5,
        user_id: '1',
        favorite: true,
    },
    {
        liquor_id: 6,
        user_id: '1',
        favorite: true,
    },
    {
        liquor_id: 7,
        user_id: '1',
        favorite: true,
    },
    {
        liquor_id: 8,
        user_id: '1',
        favorite: false,
    },
    {
        liquor_id: 9,
        user_id: '1',
        favorite: false,
    },
    {
        liquor_id: 10,
        user_id: '1',
        favorite: false,
    },
    {
        liquor_id: 11,
        user_id: '1',
        favorite: false,
    },
    {
        liquor_id: 12,
        user_id: '1',
        favorite: false,
    },
];

const seedInventory = () => Inventory.bulkCreate(InventoryData);

module.exports = seedInventory;
