const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("productmodel", {
    productId: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      productName: {
        type: DataTypes.STRING
      },
      description: {
        type: DataTypes.STRING
      },
      price: {
        type: DataTypes.STRING
      },
      imageUrl: {
        type: DataTypes.STRING
      },
      quantity: {
        type: DataTypes.STRING
      }
    });
    return Product;
  };