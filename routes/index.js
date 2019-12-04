module.exports = (app) => {
    app.use('/produits', require('./produits')(app));
    app.use('/annonces', require('./annonces')(app));
    app.use('/utilisateurs', require('./utilisateurs')(app));
};