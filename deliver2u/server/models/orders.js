const mongoose = require('mongoose');

// define the User model schema
const OrdersSchema = new mongoose.Schema({
  item: {
    type: String
  },
  address: {
  	type: String
  },
    city: {
  	type: String
  },
    state: {
  	type: String
  },
    zip: {
  	type: String
  }
});

module.exports = mongoose.model('Orders', OrdersSchema);