'use strict';
module.exports = {
   up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('Music', {
         id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
         },
         title: {
            type: Sequelize.STRING,
         },
         year: {
            type: Sequelize.STRING,
         },
         thumbnail: {
            type: Sequelize.STRING,
         },
         artistId: {
            allowNull: false,
            type: Sequelize.INTEGER,
            references: {
               model: 'Artists',
               key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
         },
         attache: {
            type: Sequelize.STRING,
         },
         genre: {
            type: Sequelize.STRING,
         },
         createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
         },
         updatedAt: {
            allowNull: false,
            type: Sequelize.DATE,
         },
      });
   },
   down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('Music');
   },
};
