module.exports = (app) => {
    app.controllers = {
        produits: require('./produits')(app),
        annonces: require('./annonces')(app)
    };
};