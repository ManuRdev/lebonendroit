const express = require('express');

module.exports = (app) => {
    const router = express.Router();

    //Route get : consulte la liste de tout les utilisateurs
    router.get('/',
        app.controllers.utilisateurs.list
       );
    
    //Route post : ajout d'un utilisateur.
    router.post('/',
        app.middlewares.bodyParser.json(),
        app.controllers.utilisateurs.create
        );

    //Route delete : supprime un utilisateur.
    router.delete('/:id',
        app.controllers.utilisateurs.remove);

    //Route put : met a jour un utilisateur.
    router.put('/:id',
        app.middlewares.bodyParser.json(),
        app.controllers.utilisateurs.update);
    
    return router;
};