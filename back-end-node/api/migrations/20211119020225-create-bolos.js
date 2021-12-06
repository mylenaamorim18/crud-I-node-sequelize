'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Bolos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      preco: {
        type: Sequelize.DOUBLE
      },
      quantidade: {
        type: Sequelize.DOUBLE
      },
      imagem: {
        type: Sequelize.STRING
      },
      descricao: {
        type: Sequelize.STRING
      },
      categoria_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Categorias', key: 'id'}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Bolos');
  }
};