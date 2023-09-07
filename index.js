import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';


const app = express();

//Conectar bd
db.authenticate()
    .then(() => console.log('Base de datos conectada'))
    .catch(error => console.log(error));

//Definir puerto
const port = process.env.PORT || 4000;

//Habilitar PUG
app.set('view engine', 'pug');

//Obtener el año actual
app.use((req, res, next) => {
    const year = new Date();    
    res.locals.ActualYear= year.getFullYear();
    res.locals.nombresitio = 'Agencia de Viajes'
    next();
});

//Agregar body parser para leer los datos del formulario
app.use(express.urlencoded({extended: true}));


//Definir la carpeta publica
app.use(express.static('public'));

//Agregar Router
app.use('/', router);

app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`)
})




























// app.get('/', (req, res) => {    -----req: lo que enviamos -------    res: lo que express nos responde
//     res.send('Holaaaaaaaa');
// });

// app.get('/', (req, res) => { -----req: lo que enviamos -------    res: lo que express nos responde
//     res.send('Holaaaaaaaa');
//     res.json({
//         id: 1
//     })
// })

// app.get('/', (req, res) => {
//     res.render();
// })

// app.get('/', (req, res) => {
//     res.send('Inicio');
// })

// app.get('/nosotros', (req, res) => {
//     res.send('Nosotros');
// })

// app.get('/contacto', (req, res) => {
//     res.send('Contacto');
// })

