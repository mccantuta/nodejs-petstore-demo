/**
* @Author: Miguel Ccantuta Leon
* @License: GNU General Public License V3.0
* @Copyright: Copyright (C) 2016 Miguel Ccantuta Leon
*/
const knex = require('../db/knexfile.js');
const PRODUCT_TABLE = 'product';

function getAll() {
  return knex.select().from(PRODUCT_TABLE).orderBy('name');
}

function getAllByCategoryId(categoryId) {
  return knex.select().from(PRODUCT_TABLE).where('category_id', categoryId).orderBy('name');
}

module.exports = {
  getAll: getAll,
  getAllByCategoryId: getAllByCategoryId
};
