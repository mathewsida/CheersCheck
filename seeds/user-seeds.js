const { User } = require('../models')

const userData = [
    { 
        id: '1',
        username: 'BigTuna',
        email: 'jh@dunderM.com',
        password: 'pamandcece'
    },
    {
        id: '2', 
        username: 'NardDog',
        email: 'ab@dunderM.com',
        password: 'cornellacappella'
    },
    { 
        id: '3',
        username: 'D-money',
        email: 'ds@dunderM.com',
        password: 'beetrlife'
    },
    { 
        id: '4',
        username: 'Dundeechamp',
        email: 'ms@dunderM.com',
        password: 'incorrect'
    },
    { 
        id: '5',
        username: 'Temp123',
        email: 'rh@dunderM.com',
        password: 'futurevicepresident'
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;