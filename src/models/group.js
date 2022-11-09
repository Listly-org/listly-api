const { Model, DataTypes } = require('sequelize')

class group extends Model {
    static init(sequelize) {
        super.init(
            {
                name: {
                    type: DataTypes.STRING,
                    allowNull: false
                }
            },
            {
                sequelize,
                tableName: 'group'
            }
        )

        return this
    }

    static associate(models) {
        this.hasMany(models.user, { foreignKey: 'group_id' })
        this.hasMany(models.list, { foreignKey: 'group_id' })
    }
}

module.exports = group
