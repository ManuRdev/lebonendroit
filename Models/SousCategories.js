var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SouscategorieSchema = new Schema ({
    titre: String,
    Description: String,
})

module.exports = mongoose.model('SousCategorie', SouscategorieSchema);