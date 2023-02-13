const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id:{
      type: DataTypes.UUID,
      defaultValue: sequelize.UUIDV4,
      primaryKey: true,
      allowNull: false
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    continent:{
      type: DataTypes.STRING,
      allowNull:false,
    },

    capital:{
      type: DataTypes.STRING,
      allowNull: false,
    },

    subregion:{
      type: DataTypes.STRING,
      allowNull: false,
    },

    area:{
      type: DataTypes.STRING,
      allowNull: false,
    },

    population:{
      type: DataTypes.STRING,
      allowNull: false
    }


  });

  sequelize.define('tourism',{
    nombre:{
      type: DataTypes.STRING,
      allowNull: false
    },

    difficult:{
      type: DataTypes.TINYINT,
      allowNull: false
    },

    duration:{
      type:DataTypes.TINYINT,
      allowNull: false
    },

    season:{
      type: DataTypes.ENUM
    }

  })

  
};
