/**
* @Author: Miguel Ccantuta Leon <mccantuta>
* @License: GNU General Public License V3.0
* @Copyright: Copyright (C) 2016 Miguel Ccantuta Leon
*/
const routes = require('express').Router();
const productService = require('../service/productService');

routes.get('/:category_id', (req, res) => {
  var category_id = req.params.category_id;
  productService.getAllByCategoryId(category_id).
      then((products) => {
        res.render('product', {
          products: products
        });
      }).
      catch(function(error) {
        console.log(error);
      });
});

module.exports = routes;
