const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comments extends Model {}

Comments.init(
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
            type: Datatypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        liquor_id: {
            type: DataTypes.INTEGER,
            reference: {
                model: 'liquor',
                key: 'id',
            },
        },
        user_id: {
            type: DataTypes.INTEGER,
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