const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/', (req, res)=>{
  res.send('countries')
})


router.get('/countries/:', (req, res)=>{
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
    })
  }
})




module.exports = router;
