const dbConfig = require("../DBConfig/Database");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: 0,
});

const database = {};

database.Sequelize = Sequelize;
database.sequelize = sequelize;

database.cart = require("./Cart.js")(sequelize, Sequelize);
database.order = require("./Order.js")(sequelize, Sequelize);
database.product = require("./Product.js")(sequelize, Sequelize);
database.user = require("./User.js")(sequelize, Sequelize);

module.exports = database;