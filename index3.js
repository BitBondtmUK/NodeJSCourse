//const path = require('path');
//const data = require('./data.json');
const express = require('express');
const _PORT = 3000;
const app = express();
const morgan = require('morgan');
const bd = require('./config/database');
const users = require('./rutas/users');

/*
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/src/vistas'));
app.get('/', (req, res)=>{
    //res.json(data);
    //res.send('Hola Mundo desde express');
    //res.sendFile(path.join(__dirname, '/src/vistas/index.html'));
    res.render('index', { 
        title: "EJS", 
        pname: "Nelia",
        plname: "Argile",
        pemail: "nargile0@umich.edu"
    });
});
*/

//PRODUCTOS
//COMPRAS

const prodrt = require('./rutas/ruta');
const ordenrt = require('./rutas/orden');

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('/', (req, res) =>{
    res.send('<h1>Bienvenido a nuestra aplicacion</h1>');
});
app.use('/login', users);
app.use('/productos', prodrt);
app.use('/orden', ordenrt);


//app.use(express.urlencoded({extended: false}));

// app.use(morgan(logger, {
//     function (req, res) {
//         return res;
//     }
// }))

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
