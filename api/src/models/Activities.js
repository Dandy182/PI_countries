const { DataTypes} = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('activities', {
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },

        difficult:{
            type: DataTypes.INTEGER,
            allowNull:false
        },

        duration:{
            type: DataTypes.INTEGER,
            allowNull:false
        },

        season:{
            type: DataTypes.ENUM('Verano', 'Otoño', 'Invierno', 'Primavera')
        }

    }, {freezeTableName:true})
}