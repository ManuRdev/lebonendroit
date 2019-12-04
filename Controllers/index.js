module.exports = (app) => {
    app.controllers = {
        produits: require('./produits')(app),
        annonces: require('./annonces')(app),
        utilisateurs: require('./utilisateurs')(app),
        categories: require('./categories')(app),
        souscategories: require('./souscategories')(app),
    };
};