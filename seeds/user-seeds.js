const { User } = require('../models');

const userData = [
    {
        id: '1',
        username: 'BigTuna',
        email: 'jh@dunderM.com',
        password: 'pamandcece',
    },
    // {
    //     username: 'NardDog',
    //     email: 'ab@dunderM.com',
    //     password: 'cornellacappella',
    // },
    // {
    //     username: 'D-money',
    //     email: 'ds@dunderM.com',
    //     password: 'beetrlife',
    // },
    // {
    //     username: 'Dundeechamp',
    //     email: 'ms@dunderM.com',
    //     password: 'winner',
    // },
    // {
    //     username: 'Temp123',
    //     email: 'rh@dunderM.com',
    //     password: 'futurevicepresident',
    // },
];

const seedUsers = () =>
    User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

module.exports = seedUsers;
