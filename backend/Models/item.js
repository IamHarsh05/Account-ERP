const mongoose = require('../db'); // Import the MongoDB connection
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  // Define your schema fields here
  name: String,
  description: String,
  rating: Number,
  projects: Number,
  experience: Number,
  price: String,
  mobiles: Array,
  // ...
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
