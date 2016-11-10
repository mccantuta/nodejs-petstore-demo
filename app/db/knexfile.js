/**
* @Author: Miguel Ccantuta Leon
* @License: GNU General Public License V3.0
* @Copyright: Copyright (C) 2016 Miguel Ccantuta Leon
*/
const knexConfig = require('../../config/knexConfig');
module.exports = require('knex')(knexConfig);
