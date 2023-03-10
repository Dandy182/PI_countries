const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id:{
      type: DataTypes.STRING(3),
      primaryKey: true,
      allowNull: false,
      unique:true
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    img:{
      type: DataTypes.STRING,
      allowNull:false
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
      defaultVaule:'' 
    },

    area:{
      type: DataTypes.STRING,
      defaultVaule:0
    },

    population:{
      type: DataTypes.STRING,
      defaultVaule:0
    }
  }, {freezeTableName:true});
  
};
