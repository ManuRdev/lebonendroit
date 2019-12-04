const express = require('express');

module.exports = (app) => {
    const router = express.Router();

    router.get('/',
    
        app.controllers.utilisateurs.list
       );
    
    router.post('/',
        app.middlewares.bodyParser.json(),
        app.controllers.utilisateurs.create
        );

    return router;
};