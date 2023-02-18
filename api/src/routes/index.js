const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios = require('axios');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

  const countries = async ()=>{
    const dApi = await axios.get(`https://restcountries.com/v3/all`)
    const result = await dApi.data.map(c =>{
      return {
        id: c.cca3,
        name: c.name.common,
        img: c.flags[0],
        continent: c.continents[0],
        capital: c.capital[0],
        sub:c.region,
        area: c.area,
        population: c.population
      }
    });

    return  result;
  }


const getDataBase = async () => {
  return await Country.findAll({
    include:{
      model: Activities,
      attributes: ['name', 'dificult', 'duration', 'season'],
    }

  });
}


const getCounttries = async () =>{
  const infCountries = await  countries()
  const infActivities = await getDataBase();
  return infCountries.concat(infActivities);
}



module.exports = router;
