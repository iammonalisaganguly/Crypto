const mongoose = require('mongoose');

const cryptoSchema = new mongoose.Schema({
    symbol: { type: String } ,  // String and Unique
    name: { type: String },     // String and Unique
    marketCapUsd: String,                     // String  ( not Number)
    priceUsd: String                        //String
},{timestamp:true})


module.exports = mongoose.model('crypto', cryptoSchema)