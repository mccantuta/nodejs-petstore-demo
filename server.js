/**
* @Author: Miguel Ccantuta Leon
* @License: GNU General Public License V3.0
* @Copyright: Copyright (C) 2016 Miguel Ccantuta Leon
*/
const creditCardTypeService = require('./app/service/creditCardTypeService');
const express = require('express');
const app = express();
const routes = require('./app/routes/')

app.set('views', __dirname + '/app/views');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use('/', routes);

app.listen(3000, () => {
  console.log('Server listening on port 3000');
})
