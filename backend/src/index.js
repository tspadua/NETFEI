const express = require('express');
const cors = require('cors');


var database = require( './database/connection' );
//Importando as rotas de routes.js
const routes = require('./routes');



const app = express(); // variavel para armazenar a aplicacao

database.connectToServer( function( err, client ) {
   if (err) console.log(err);

   app.use(cors());

   app.use(express.json());

   app.use(routes);

   app.listen(8000); // definindo a porta da aplicacao
} );


