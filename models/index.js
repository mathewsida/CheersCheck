const User = require('./User');
const Comments = require('./Comment');
const Whiskey = require('./Whiskey');
const Tequila = require('./Tequila');
const Rum = require('./Rum');
const Vodka = require('./Vodka');
const Gin = require('./Gin');

// User.hasMany( Whiskey, Tequila, Rum, Vodka, Gin, (
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE'
// ));