const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {getData, countryId} = require('../Controllers/DCountries');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/countries', getData); //fin del router.get

router.get('/countries/:id', countryId);

router.post('/activities')

      
    
module.exports = router;
