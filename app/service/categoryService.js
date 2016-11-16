/**
* @Author: Miguel Ccantuta Leon
* @License: GNU General Public License V3.0
* @Copyright: Copyright (C) 2016 Miguel Ccantuta Leon
*/
const knex = require('../db/knexfile.js');
const CATEGORY_TABLE = 'category';

function getAll() {
  return knex.select().from(CATEGORY_TABLE).orderBy('name');
}

module.exports = {
  getAll: getAll
};
