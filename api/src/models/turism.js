const {DataTypes} = Require('sequelize')


module.exports = (sequelize) => {sequelize.define('tourism',{
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
      type: DataTypes.ENUM('Verano', 'otoño', 'invierno', 'primavera')
    }

  }, {freezeTableName:true})

}
