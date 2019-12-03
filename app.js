const express = require('express');
const app = express();

require('./models')(app);           console.log('loading models...');
require('./controllers')(app);      console.log('loading controllers...');
require('./middlewares')(app);      console.log('loading middlewares...');
require('./routes')(app);           console.log('loading routes...');


let port = 3000;
 

app.listen(port, () =>  { // ecoute du serveur sur le port 3000
    console.log('le serveur fonctionne')
})