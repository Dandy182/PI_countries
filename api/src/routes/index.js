const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios = require('axios');
const {Country, Activities} = require('../db');
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

  const getApiCountries = async ()=>{
    const dApi = await axios.get(`https://restcountries.com/v3/all`)
    const result = await dApi.data.map(c =>{
      return {
        id: c.cca3,
        name: c.name.common,
        img: c.flags[0],
        continent: c.continents[0],
        capital: c.capital,
        sub:c.region,
        area: c.area,
        population: c.population
      }
    });

    return  result;
  }

const getDataBase = async () => {
  return await Country.findAll({
    include:[{
      model: Activities,
    }]
  });
}

const getFullCountries = async () =>{
  const infCountries = await  getApiCountries()
  const infActivities = await getDataBase();
  return infCountries.concat(infActivities);
}

router.get('/countries', async (req, res) =>{
  let allCountries = await getFullCountries();
  let name = req.query.name;
})

router.get('/countries/{idPais}')



module.exports = router;
