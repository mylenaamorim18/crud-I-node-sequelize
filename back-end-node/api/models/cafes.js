'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cafes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Categorias, {
        foreignKey: 'categoria_id'
      });
    }
  };
  Cafes.init({
    nome: DataTypes.STRING,
    preco: DataTypes.DOUBLE,
    quantidade: DataTypes.DOUBLE,
    imagem: DataTypes.STRING,
    descricao: DataTypes.STRING,
    categoria_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cafes',
  });
  return Cafes;
};