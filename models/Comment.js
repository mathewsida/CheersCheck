const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        comment_text: {
            type: DataTypes.String,
            allowNull: false,
        },
        date_created: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        liquor_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            reference: {
                model: 'liquor',
                key: 'id',
            },
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            reference: {
                model: 'user',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamp: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment',
    }
);

module.exports = Comment;