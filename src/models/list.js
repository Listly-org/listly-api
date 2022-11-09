const { Model, DataTypes } = require('sequelize')
const group = require('./group')

class list extends Model {
    static init(sequelize) {
        super.init(
            {
                type: {
                    type: DataTypes.STRING,
                    allowNull: false
                },
                name: {
                    type: DataTypes.STRING,
                    allowNull: false
                },
                value: {
                    type: DataTypes.DOUBLE,
                    allowNull: true
                },
                group_id: {
                    type: DataTypes.NUMBER,
                    allowNull: false,
                    references: {
                        model: group,
                        key: 'id'
                    }
                }
            },
            {
                sequelize,
                tableName: 'list'
            }
        )

        return this
    }

    static associate(models) {
        this.belongsTo(models.group, { foreignKey: 'group_id' })

        this.hasMany(models.listItem, { foreignKey: 'list_id' })
    }
}

module.exports = list
