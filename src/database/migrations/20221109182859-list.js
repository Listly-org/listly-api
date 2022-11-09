'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('list', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            type: {
                type: Sequelize.STRING,
                allowNull: false
            },
            value: {
                type: Sequelize.DOUBLE,
                allowNull: true
            },
            group_id: {
                type: Sequelize.INTEGER,
                allowNull: true,
                references: {
                    model: 'group',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE'
            }
        })
    },

    async down(queryInterface) {
        await queryInterface.dropTable('list')
    }
}
