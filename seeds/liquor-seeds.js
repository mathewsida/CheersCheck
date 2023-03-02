const { Liquor } = require('../models');

const LiquorData = [
  {
    name: '818',
    liquor_type: 'Tequila',
    volume_size: '750ml',
    description: 'Made from 100% Blue Weber Agaves in Jalisco, Mexico, we are proud to introduce Kendall Jenners award-winning 818 Tequila.',
    date_created: '3/1/23',
    user_id: '1'
  },
  {
    name: 'Bacardi Superior',
    liquor_type: 'Rum',
    volume_size: '750ml',
    description: 'A litre bottle of Bacardi, the best-selling spirit brand worldwide, enjoyed in more than 170 countries.',
    date_created: '2/28/23',
    user_id: '2'
  },
  {
    name: 'Hibiki Japanese Harmony',
    liquor_type: 'Whiskey',
    volume_size: '750ml',
    description: 'Hibiki Japanese Harmony is a blend of Japanese malt and grain whiskies from Yamazaki, Hakushu and Chita.',
    date_created: '1/1/23',
    user_id: '3'
  },
  {
    name: 'Bombay Sapphire',
    liquor_type: 'Gin',
    volume_size: '750ml',
    description: 'Trendy younger sibling to Bombay Original, on whose recipe it is based (with a couple of extra botanicals).',
    date_created: '1/16/23',
    user_id: '4'
  },
  {
    name: 'Ciroc Vodka',
    liquor_type: 'Vodka',
    volume_size: '750ml',
    description: 'A high-quality vodka from Ciroc, made from snap frost grapes that are cold fermented before being distilled in a combination of steel and copper stills.',
    date_created: '2/1/23',
    user_id: '5'
  },
];

const seedLiquor = () => Liquor.bulkCreate(LiquorData);

module.exports = seedLiquor;