var dotenv = require('dotenv').config();

module.exports = {
  client: dotenv.DB_CLIENT,
  connection: {
    host: dotenv.DB_HOST,
    user: dotenv.DB_USER,
    password: dotenv.DB_PASSWORD,
    database: dotenv.DB_DATABASE
  }
};
