const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios = require('axios');
const {Country, Activities} = require('../db');
const {getApiCountries, getDataBase} = require('../Controllers/DCountries');
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);




const getFullCountries = async () =>{
  const infCountries = await  getApiCountries()
  const infActivities = await getDataBase();
  return infCountries.concat(infActivities);

}

router.get('/countries', async (req, res) =>{
  let allCountries = await getFullCountries();
  let search = req.query.name;


  if(search){
    let selectCountry = allCountries.filter(c => c.name.includes(search));
    selectCountry.length ? res.status(200).send(selectCountry) : res.status(404).send(`El país solicitado no se encuentra`) ;
  }else{
    res.status(200).send(allCountries);
  }

 })

router.get('/countries/:{idPais}', async (req, res) =>{
  let searchName = req.params['{idPais}']
  console.log(searchName);
})

module.exports = router;
