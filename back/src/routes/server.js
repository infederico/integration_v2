//mis rutas acá: const routerDetail = require('./routes/detail');
///////////////////////////////////
const express = require('express');
const server = express();
const PORT = 3001;

//server.use(express.json());

//server.get();

server.listen(PORT, () => {
   console.log('Server raised in port ' + PORT);
});