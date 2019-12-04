const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UtilisateurSchema = new Schema({
    Nom: String,
    Prenom: String,
    DateNaissance: Date,
    Ville : String,
    Genre: String,
    email: String,
    password: String,
    Tel: String
})

module.exports = mongoose.model('utilisateur',UtilisateurSchema)