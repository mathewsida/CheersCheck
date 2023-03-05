const { User } = require('../models');

const userData = [
    {
        user_id: '1',
        username: 'BigTuna',
        email: 'jh@dunderM.com',
        password: 'pamandcece',
    },
    {
        user_id: '2',
        username: 'NardDog',
        email: 'ab@dunderM.com',
        password: 'cornellacappella',
    },
    {
        user_id: '3',
        username: 'D-money',
        email: 'ds@dunderM.com',
        password: 'beetrlife',
    },
    {
        user_id: '4',
        username: 'Dundeechamp',
        email: 'ms@dunderM.com',
        password: 'winner',
    },
    {
        user_id: '5',
        username: 'Temp123',
        email: 'rh@dunderM.com',
        password: 'futurevicepresident',
    },
];

const seedUsers = () =>
    User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

module.exports = seedUsers;
