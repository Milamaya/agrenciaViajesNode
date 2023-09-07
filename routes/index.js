
import express from 'express';
import { paginaInicio, 
    paginaNosotros, 
    paginaTestimonios, 
    paginaViajes, 
    paginaDetalleViaje 
} from '../controllers/paginasController.js';

import {
    guardarTestimonios

} from '../controllers/testimonialController.js';



const router = express.Router();

router.get('/', paginaInicio); 

router.get('/nosotros', paginaNosotros);  

router.get('/testimonios', paginaTestimonios); 

router.post('/testimonios', guardarTestimonios); 

router.get('/viajes', paginaViajes);

router.get('/viajes/:slug', paginaDetalleViaje);   



export default router;





// router.get('/', (req, res) => {
//     res.send('Inicio');
// });