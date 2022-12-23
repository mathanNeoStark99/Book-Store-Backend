const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("usermodel", {
        email: {
        type: Sequelize.STRING,
        primaryKey: true
      },
      password: {
        type: DataTypes.STRING
      },
      username: {
        type: DataTypes.STRING
      },
      role: {
        type: DataTypes.STRING
      },
      mobileNumber: {
        type: DataTypes.STRING
      }
    });
  
    return User;
  };