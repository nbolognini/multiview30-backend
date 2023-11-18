//Forma de importar esto que necesito:
const express = require('express');
require('dotenv').config();

//Crear el servidor de express
const app = express();

// Lectura y parseo del body
//TUVE QUE PONERLO ACA PARA QUE FUNCIONE EL POSTMAN
app.use( express.json() );

console.log(process.env);

//Un comentario para saber el inicio del index.js
console.log('Iniciando index.js');






//Directorio Público:
app.use( express.static('./public') );

// aca indico en donde van a estar los endpoints
app.use('/api/auth', require('./routes/auth') );












//Escuchar peticiones
app.listen(4000, () => {
    console.log('Servidor corriendo en puerto 4000');
});



app.get('/hola', (req, res) => {
    console.log('Se solicitó la ruta /hola');
    res.json({
        ok: true,
        msg: 'Ahora te respondo HOLA'
    });
     
 });