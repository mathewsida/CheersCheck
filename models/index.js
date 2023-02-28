const User = require('./User');
const Liquor = require('./Liquor');
const Comment = require('./Comment');

User.hasMany(Liquor, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Liquor.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Comment.belongsTo(Liquor, {
    foreignKey: 'liquor_id',
    onDelete: 'CASCADE',
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
  });

module.exports = {
    User,
    Liquor,
    Comment,
  };