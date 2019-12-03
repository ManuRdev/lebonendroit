const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/LeBonEndroit');

module.exports = (app) => {
    app.models = {
        Produits: require('./Produits'),
        Annonces: require('./Annonces'),
    };
};