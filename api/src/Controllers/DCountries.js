const axios = require('axios');
const { Op } = require('sequelize');
const {Country, Activities} = require('../db');



const getData = async (req, res)=>{
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

          const allCountries = await Country.findAll({
              attributes:['id', 'name', 'img', 'continent', 'population'],
              include:{
                  model: Activities,
                  attributes:['name', 'difficult', 'duration', 'season']
              },
                    
          });

          res.status(200).json(allCountries);

      }catch(error){

          res.status(401).send(`The Api is not responding`);
      }
  } else {

      try{   

          const findCountry = await Country.findAll({
              where: {
                  name:{ [Op.iLike]: `%${name}%` }
              },
              attributes:{
                  exclude:['createAt', 'updateAt'],
              }
          });

          if(findCountry.length !== 0){
              res.status(200).json(findCountry);
          }else{
              throw new Error(`Couldn't find a country with than name`)
          }

      }catch(error){
          res.status(404).json(error.message)
      }
  }

};

const countryId = async (req, res)=>{
  let idPais = req.params.id;

  try{
    let country = await Country.findAll({
      where:{
        id:{
          [Op.like]: idPais
        }
      },
      attributes: {
        exclude: ['createAt', 'updateAt']
      },
      include:{
        model: Activities,
        attributes:{
          exclude: ['id','createAt', 'updateAt']
        }
      }
    });

    if(country.length !== 0){
      res.status(200).json(country);
    }else{
      throw new Error(`Couldn't find a country with that id`);
    }
  }catch(error){
    res.status(404).json(`Error ${error}`)
  }
}



const mkActivities = async (req, res) => {
  const {name, difficult, duration, season, country} = req.body;
  
  console.log(name, difficult, duration, season, country)

  try{
    const activity = await Activities.create({
      name, difficult, duration, season
    });


    let countryDb = await Country.findAll({
      where:{
        name:country
      }
    });

    await activity.addCountry(countryDb);

    console.log(activity);
    res.status(200).json(activity);
  }catch(error){
    res.status(404).send(`The activity it wasn't created by error ${error}`)
  }
}



module.exports = {
  getData,
  countryId,
  mkActivities
}