const express = require('express');
var hbs = require('hbs');

require('./hbs/helpers')

const port = process.env.PORT || 3000;

//declara variable
const app = express()


app.use(express.static(__dirname + '/public'))

// Express HBS engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');



//configurando solicitud get cuando el path sea /
// app.get('/data', (req, res) => {
//     // res.send('Hello World')

//     let salida = {
//         nombre: 'Juanan',
//         edad: 28,
//         url: req.url
//     }

//     res.send(salida);
// });
app.get('/', (req, res) => {
    // res.send('Hello World')
    res.render('home', {
        nombre: 'juanan'
    });
});

app.get('/about', (req, res) => {
    // res.send('Hello World')
    res.render('about', {

    });
});

// app.get('/data', (req, res) => {
//     res.send('Hola Data')
// });

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});