module.exports = (app) => {
    app.use('/produits', require('./produits')(app));
    app.use('/annonces', require('./annonces')(app));
    app.use('/utilisateurs', require('./utilisateurs')(app));
    app.use('/categories', require('./categories')(app));
    app.use('/souscategories', require('./souscategories')(app));
};