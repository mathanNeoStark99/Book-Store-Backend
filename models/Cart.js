const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Cart = sequelize.define("cartmodel", {
      cartId: {
        type: Sequelize.STRING,
        primaryKey: true
      },
      productName: {
        type: DataTypes.STRING
      },
      price: {
        type: DataTypes.STRING
      },
      quantity: {
        type: DataTypes.STRING
      },
      userId: {
        type: DataTypes.STRING
      }
    });
  
    return Cart;
  };