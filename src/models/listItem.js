const { Model, DataTypes } = require('sequelize')
const list = require('./list')

class listItem extends Model {
    static init(sequelize) {
        super.init(
            {
                name: {
                    type: DataTypes.STRING,
                    allowNull: false
                },
                completed: {
                    type: DataTypes.BOOLEAN,
                    allowNull: false,
                    defaultValue: false
                },
                list_id: {
                    type: DataTypes.NUMBER,
                    allowNull: false,
                    references: {
                        model: list,
                        key: 'id'
                    }
                }
            },
            {
                sequelize,
                tableName: 'list_item'
            }
        )

        return this
    }

    static associate(models) {
        this.belongsTo(models.list, { foreignKey: 'list_id' })
    }
}

module.exports = listItem
