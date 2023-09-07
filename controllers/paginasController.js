import {Viaje} from '../Models/Viaje.js';
import { Testimonios } from '../Models/Testimonios.js';

const paginaInicio = async (req, res) => {

    //Consultar 3 viajes del modelo Viaje

    const promiseDB = [];

    promiseDB.push(Viaje.findAll({limit:3}));
    promiseDB.push(Testimonios-findAll({limit:3}));

    try{
        
        const resultado = await Promise.all(promiseDB);
        
        res.render('inicio', {
            pagina: 'Inicio',
            clase: 'home',
            viajes: resultado[0],
            testimonios: resultado[1]
        });
    }catch(error){
        console.log(error)
    }    
}

const paginaNosotros = (req, res) => {
    res.render('nosotros', {
        pagina: 'Nosotros'
    });
}

const paginaTestimonios = async (req, res) => {

    try{

        const testimonios = await Testimonios.findAll();
        res.render('testimonios', {
            pagina: 'Testimonios',
            testimonios
        });
    }catch(error){
        console.log(error);
    }
}

const paginaViajes = async (req, res) => {
    //consultar BD
    const viajes = await Viaje.findAll();

    console.log(viajes);

    res.render('viajes', {
        pagina: 'Proximos Viajes',
        viajes,
    });
}

//Muestra un viaje por su slug
const  paginaDetalleViaje = async (req, res) => {
    const {slug} = req.params;

    try{
        const viaje = await Viaje.findOne({where : { slug } });

        res.render('viaje', {
            pagina: 'Información Viaje',
            viaje
        })
    } catch(error){
        console.log(error);
    }
}


export {
    paginaInicio,
    paginaNosotros,
    paginaTestimonios,
    paginaViajes,
    paginaDetalleViaje
}