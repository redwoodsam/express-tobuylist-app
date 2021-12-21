const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true}
}, {timestamps: true})

// The first argument is the name of the collection that will be saved in the MongoDB database
const Item = mongoose.model('Item', itemSchema); 
module.exports = Item;