module.exports = (app) => {
    app.use('/produits', require('./produits')(app));
    app.use('/annonces', require('./annonces')(app));
};