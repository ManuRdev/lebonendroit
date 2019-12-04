const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/LeBonEndroit');

module.exports = (app) => {
    app.models = {
        Produits: require('./Produits'),
        Annonces: require('./Annonces'),
        Utilisateurs: require('./Utilisateurs'),
        SousCategories: require('./SousCategories'),
        Categorie: require('./Categories'),
    };
};