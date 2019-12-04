const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const Produitschema = mongoose.Schema({
    Nom : String,
    description : String,
    prix : Number,
    SousCategories: [{
        type: Schema.Types.ObjectId,
        ref: 'SousCategorie'
    }],
})

module.exports = mongoose.model('produit',Produitschema);