const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Product = new Schema({
  name: {
    type: String
  },
  code: {
    type: String
  },
  price: {
    type: Number
  }
},{
    collection: 'products'
});

module.exports = mongoose.model('Product', Product);
