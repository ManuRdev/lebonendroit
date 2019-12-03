const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const Annoncesschema = mongoose.Schema({
    Nom : String,
    Description : String,
    Produits: [{
        type: Schema.Types.ObjectId,
        ref: 'Produits'
    }]
})

module.exports = mongoose.model('annonces',Annoncesschema);