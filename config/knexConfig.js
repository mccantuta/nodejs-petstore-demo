/**
* @Author: Miguel Ccantuta Leon
* @License: GNU General Public License V3.0
* @Copyright: Copyright (C) 2016 Miguel Ccantuta Leon
*/
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
