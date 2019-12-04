const express = require('express');

module.exports = (app) => {
    const router = express.Router();

    router.get('/',
    
        app.controllers.souscategories.list
       );
    
    router.post('/',
        app.middlewares.bodyParser.json(),
        app.controllers.souscategories.create
        );

    return router;
};