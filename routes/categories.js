const express = require('express');

module.exports = (app) => {
    const router = express.Router();

    router.get('/',
    
        app.controllers.categories.list
       );
    
    router.post('/',
        app.middlewares.bodyParser.json(),
        app.controllers.categories.create
        );

    return router;
};