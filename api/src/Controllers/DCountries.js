const {Country, Activities} = require('../db');
const axios = require('axios');

const getApiCountries = async ()=>{
  const dApi = await axios.get(`https://restcountries.com/v3/all`)
  const result = await dApi.data.map(c =>{

    return {
      id: c.cca3,
      name: c.name.common,
      img: c.flags[1],
      continent: c.continents[0],
      capital: c.capital[0],
      subregion:c.subregion,
      area: c.area,
      population: c.population
    }
  });

  const datadb = await result.map(country => {
    return country;

  })

  datadb.forEach(element => {
    Country.findOrCreate({
      where:{id: element.id},
      defaults:{
        name: element.name,
        img: element.img,
        continent: element.continent,
        capital:element.capital,
        subregion:element.subregion,
        area: element.area,
        population: element.population
      }
    })
  });

  return result;
}



const getDataBase = async () => {
  return await Country.findAll({
    include:[{
      model: Activities,
    }]
  });
}




module.exports = {
  getApiCountries,
  getDataBase

}