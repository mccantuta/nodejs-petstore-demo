/**
* @Author: Miguel Ccantuta Leon <mccantuta>
* @License: GNU General Public License V3.0
* @Copyright: Copyright (C) 2016 Miguel Ccantuta Leon
*/
const routes = require('express').Router();
const categoryService = require('../service/categoryService');

routes.get('/', (req, res) => {
  categoryService.getAll().
      then((categories) => {
        res.render('home', {
          categories: categories
        });
      }).
      catch(function(error) {
        console.log(error);
      });
});

module.exports = routes;
