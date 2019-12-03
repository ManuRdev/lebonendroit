const express = require('express');

module.exports = (app) => {
    const router = express.Router();

    router.get('/',
    
        app.controllers.produits.list
       );
    
    router.post('/',
        app.middlewares.bodyParser.urlencoded(),
        app.controllers.produits.create
        );

    return router;
};