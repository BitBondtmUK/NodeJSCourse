const express = require('express');
const _PORT = 3000;
const app = express();
const bd = require('./config/database');

const prodrt = require('./rutas/ruta');
const ordenrt = require('./rutas/orden');

app.get('/', (req, res) =>{
    res.send('<h1>Bienvenido a nuestra aplicacion</h1>');
});

app.use('/productos', prodrt);
app.use('/orden', ordenrt);


app.use((req, res, next) =>{
    const error = new Error('No se encuentra');
    //error.status(404);
    error.statusCode = 404;
    next(error);
});

app.use((error, req, res, next) =>{
    res.status(error.statusCode || 500);
    res.json({
        error:
        {
            message: error.message
        }
    });
});




app.listen(_PORT, ()=>{
    console.log(`Mi servidor esta corriendo en el puerto ${_PORT}`)
    //console.log(data);
})
