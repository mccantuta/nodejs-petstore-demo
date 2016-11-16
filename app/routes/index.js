/**
* @Author: Miguel Ccantuta Leon <mccantuta>
* @License: GNU General Public License V3.0
* @Copyright: Copyright (C) 2016 Miguel Ccantuta Leon
*/
const routes = require('express').Router();
const productRoute = require('./productRoute');
const homeRoute = require('./homeRoute');

routes.use('/product', productRoute);
routes.use('/', homeRoute);

module.exports = routes;
