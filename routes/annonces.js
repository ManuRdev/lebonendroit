const express = require('express');

module.exports = (app) => {
    const router = express.Router();

    router.get('/',
    
        app.controllers.annonces.list
       );
    
    router.post('/',
        app.middlewares.bodyParser.urlencoded(),
        app.controllers.annonces.create
        );

    return router;
};