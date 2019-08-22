'use strict';
const Sequelize = require('sequelize')

module.exports = function (sequelize, DataTypes) {
    let Product = sequelize.define("Product", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        product_name: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        product_price:{
            type: Sequelize.INTEGER,
            allowNull: false
        },
        createdAt: {
            type: Sequelize.DATE,
            allowNull: false
        },
        updatedAt: Sequelize.DATE
    }, {
            freezeTableName: true
        });

       


    return Product;
};