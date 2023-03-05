// for future development
const { Comment } = require('../models');
const comments = [
    {
        message:
            "I see that you have a great selection of whiskey. Have you tried the Blanton's Single Barrel Bourbon?",
        created_by: '1',
        inventory_id: '1',
    },
    // {
    //     message:
    //         'I love the variety of spirits you have! Have you ever made a Hemingway Daiquiri with the Havana Club Añejo Blanco?',
    //     created_by: '2',
    //     inventory_id: '1',
    // },
    // {
    //     message:
    //         'You have a nice collection of gin. Have you tried the Botanist Islay Dry Gin? It has a unique flavor profile with 31 botanicals!',
    //     created_by: '3',
    //     inventory_id: '1',
    // },
    // {
    //     message:
    //         'Great selection of tequila! Have you tried the Clase Azul Reposado? It has a smooth taste with hints of vanilla and caramel.',
    //     created_by: '4',
    //     inventory_id: '1',
    // },
    // {
    //     message:
    //         'I see you have some bitters in your collection. Have you tried the Bittermens Xocolatl Mole Bitters? They add a nice chocolate and spice flavor to cocktails!',
    //     created_by: '5',
    //     inventory_id: '1',
    // },
];

const seedComments = () => Comment.bulkCreate(comments);

module.exports = seedComments;
