'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categorias extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //1 para N
      Categorias.hasMany(models.Bolos, {
        foreignKey: 'categoria_id'
      });
      Categorias.hasMany(models.Cafes, {
        foreignKey: 'categoria_id'
      });
    }
  }
  Categorias.init({
    nome: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Categorias',
  });
  return Categorias;
};