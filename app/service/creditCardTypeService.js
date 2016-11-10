/**
* @Author: Miguel Ccantuta Leon
* @License: GNU General Public License V3.0
* @Copyright: Copyright (C) 2016 Miguel Ccantuta Leon
*/
const knex = require('../db/knexfile.js');
const CREDIT_CARD_TYPE_TABLE = 'credit_card_type';

function getAll() {
  return knex.select().from(CREDIT_CARD_TYPE_TABLE);
}

module.exports = {
  getAll: getAll
};
