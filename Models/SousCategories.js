var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SouscategorieSchema = new Schema ({
    titre: String,
    Description: String,
    Produits: [{
        type: Schema.Types.ObjectId,
        ref: 'Produits'
    }]
})

module.exports = mongoose.model('SousCategorie', SouscategorieSchema);