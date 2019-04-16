const express = require('express');
const app = express();
const productRoutes = express.Router();

// Require Product model in our routes module
let Product = require('../models/Product');

// Defined store route
productRoutes.route('/add').post(function (req, res) {
  let products = new Product(req.body);
  products.save()
    .then(products => {
      res.status(200).json({'products': 'products in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
productRoutes.route('/').get(function (req, res) {
    Product.find(function (err, products){
    if(err){
      console.log(err);
    }
    else {
      res.json(products);
    }
  });
});


module.exports = productRoutes;
