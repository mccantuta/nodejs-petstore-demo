const knex = require('../db/knexfile.js');
const CREDIT_CARD_TYPE_TABLE = 'credit_card_type';

function getAll() {
  return knex.select().from(CREDIT_CARD_TYPE_TABLE);
}

module.exports = {
  getAll: getAll
};
