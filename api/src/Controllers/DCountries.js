const axios = require('axios');
const {Country, Activities} = require('../db')


let apiCountries = async ()=> {
  try{
    let getDataApi = await axios.get(`https://restcountries.com/v3/all`)
    getDataApi.data.map(c =>{

      Country.findOrCreate({
        where:{
          id: c.cca3
        },
        defaults:{
          id: p.cca3,
          name: p.name.common,
          flagImg: p.flags[1],
          continent: p.continents[0],
          capital: !p.capital ? "This country doesn't have a capital" : p.capital[0],
          subregion: p.subregion,
          area: p.area,
          population: p.population
        }
      })
    })

  }catch(error){
    throw new Error(`Api no responde`)
  }
}





module.exports = {
  apiCountries,
}