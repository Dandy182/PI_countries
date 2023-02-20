const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios = require('axios');
const {Country, Activities} = require('../db');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/countries', async (req, res)=>{
    let {name} = req.query;

    if(!name){
        try{
            let getDataApi = await axios.get(`https://restcountries.com/v3/all`)
            getDataApi.data.map(c => {
                Country.findOrCreate({
                    where:{id: c.cca3},
                    defaults:{
                        id: c.cca3,
                        name: c.name.common,
                        img: c.flags[1],
                        continent: c.continents[0],
                        capital: !c.capital ? `This country doesn't have a capital` : c.capital[0],
                        subregion: c.subregion,
                        area: c.area,
                        population: c.population
                    }                 

                });

            });

        }catch(error){
            res.status(401).json(error.message);
        }
    }

}); //fin del router.get
      

      
    
module.exports = router;
