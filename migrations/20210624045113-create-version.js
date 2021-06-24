'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('version', {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: {
        type: Sequelize.CHAR(50),
        allowNull: false,
      },
      descripcion: {
        type: Sequelize.CHAR(120),
        allowNull: false,
      },
      precio: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      auto_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        references: {
          model: 'auto',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      estatus: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('version');
  },
};
