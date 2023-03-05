// Import Models
const User = require('./User');
const Liquor = require('./Liquor');
const Comment = require('./Comment');
const Inventory = require('./Inventory');

// User.hasMany(Inventory, {
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE',
// });
User.hasOne(Inventory, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

User.hasMany(Comment, {
    foreignKey: 'created_by',
    onDelete: 'CASCADE',
});

Inventory.belongsTo(User, {
    foreignKey: 'user_id',
});

Liquor.hasOne(Inventory, {});

Inventory.belongsTo(Liquor, {
    foreignKey: { name: 'liquor_id' },
});

Comment.belongsTo(User, {
    foreignKey: 'created_by',
});

Comment.belongsTo(Inventory, {
    foreignKey: 'inventory_id',
    onDelete: 'CASCADE',
});
// User.hasMany(Liquor, {
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE',
// });

// User.hasMany(Comment, {
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE',
// });

// Liquor.belongsTo(User, {
//     foreignKey: 'user_id',
// });

// Liquor.hasMany(Comment, {
//     foreignKey: 'liquor_id',
//     onDelete: 'CASCADE',
// });

// Comment.belongsTo(User, {
//     foreignKey: 'user_id',
// });

// Comment.belongsTo(Liquor, {
//     foreignKey: 'liquor_id',
// });

// User.belongsTo(Liquor, {
//     foreignKey: 'rating',
//     onDelete: 'CASCADE',
// });
// Liquor.belongsTo(User, {
//     foreignKey: 'liquor_id',
//     onDelete: 'CASCADE',
// });

module.exports = {
    User,
    Liquor,
    Comment,
    Inventory,
};
