const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Order = sequelize.define("ordermodel", {
    orderId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
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
  
    return Order;
  };