const { Liquor } = require('../models');

const LiquorData = [
    {
        name: 'Don Julio',
        type: 'Tequila',
        volume: '750ml',
        description:
            'A high-end tequila that is made from 100% blue agave and aged for at least 18 months in oak barrels.',
        image: '001Tequila',
    },
    {
        name: '818',
        type: 'Tequila',
        volume: '750ml',
        description:
            'Made from 100% Blue Weber Agaves in Jalisco, Mexico, we are proud to introduce Kendall Jenners award-winning 818 Tequila.',
        date_created: '3/1/23',
        image: '002Tequila',
    },
    {
        name: 'Jose Cuervo',
        type: 'Tequila',
        volume: '750ml',
        description:
            'A premium tequila that is made from 100% blue agave and aged for at least two months in oak barrels.',
        image: '003Tequila',
    },
    {
        name: 'Bacardi Superior',
        type: 'Rum',
        volume: '750ml',
        description:
            'A litre bottle of Bacardi, the best-selling spirit brand worldwide, enjoyed in more than 170 countries.',
        image: '001Rum',
    },
    {
        name: 'Bacardi',
        type: 'Rum',
        volume: '750ml',
        description:
            'A classic white rum that is aged for at least one year in oak barrels and then filtered.',
        image: '002Rum',
    },
    {
        name: 'Captain Morgan',
        type: 'Rum',
        volume: '1000ml',
        description:
            'A spiced rum that is a blend of Caribbean rums and natural spices.',
        image: '003Rum',
    },
    {
        name: 'Hibiki Japanese Harmony',
        type: 'Whiskey',
        volume: '750ml',
        description:
            'Hibiki Japanese Harmony is a blend of Japanese malt and grain whiskies from Yamazaki, Hakushu and Chita.',
        image: '001Whiskey',
    },
    {
        name: 'Jack Daniels',
        type: 'Whiskey',
        volume: '750ml',
        description:
            'A Tennessee whiskey that is charcoal mellowed before going into oak barrels for aging.',
        image: '002Whiskey',
    },
    {
        name: 'Jameson',
        type: 'Whiskey',
        volume: '1000ml',
        description:
            'An Irish whiskey that is triple distilled and aged for a minimum of four years in oak barrels.',
        image: '003Whiskey',
    },
    {
        name: 'Bombay Sapphire',
        type: 'Gin',
        volume: '750ml',
        description:
            'Trendy younger sibling to Bombay Original, on whose recipe it is based (with a couple of extra botanicals).',
        image: '001Gin',
    },
    {
        name: "Hendrick's",
        type: 'Gin',
        volume: '700ml',
        description:
            'A Scottish gin made with eleven botanicals, including Bulgarian rose petals and cucumber.',
        image: '002Gin',
    },
    {
        name: 'Tanqueray',
        type: 'Gin',
        volume: '750ml',
        description:
            'A classic London dry gin made with four botanicals, including juniper, coriander, angelica, and licorice.',
        image: '003Gin',
    },
    {
        name: 'Ciroc Vodka',
        type: 'Vodka',
        volume: '750ml',
        description:
            'A high-quality vodka from Ciroc, made from snap frost grapes that are cold fermented before being distilled in a combination of steel and copper stills.',
        date_created: '2/1/23',
        image: '001Vodka',
    },
    {
        name: 'Smirnoff',
        type: 'Vodka',
        volume: '1000ml',
        description:
            'A classic vodka that is triple distilled and filtered ten times.',
        image: '002Vodka',
    },
    {
        name: 'Ketel One',
        type: 'Vodka',
        volume: '750ml',
        description:
            'A premium vodka that is made from 100% wheat and distilled in copper pot stills.',
        image: '003Vodka',
    },
];

const seedLiquor = () => Liquor.bulkCreate(LiquorData);

module.exports = seedLiquor;
