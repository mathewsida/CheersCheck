const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Liquor extends Model {}

Liquor.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        liquor_type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        volume_size: {
            type: DataTypes.DECIMAL,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date_created: {
            type: Datatypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
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
        modelName: 'liquor',
    }
);

module.exports = Liquor;