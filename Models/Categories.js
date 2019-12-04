var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var categorieSchema = new Schema ({
    titre: String,
    Description: String,
    SousCategories: [{
        type: Schema.Types.ObjectId,
        ref: 'SousCategories'
    }],
})

module.exports = mongoose.model('Categorie', categorieSchema);