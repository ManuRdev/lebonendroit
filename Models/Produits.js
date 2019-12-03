const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const Produitschema = mongoose.Schema({
    Nom : String,
    description : String,
    prix : Number
})

module.exports = mongoose.model('produit',Produitschema);