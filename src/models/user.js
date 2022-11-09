const { Model, DataTypes } = require('sequelize')
const bcrypt = require('bcryptjs')
const group = require('./group')

class user extends Model {
    static init(sequelize) {
        super.init(
            {
                name: {
                    type: DataTypes.STRING,
                    allowNull: false
                },
                email: {
                    type: DataTypes.STRING,
                    allowNull: false
                },
                password: {
                    type: DataTypes.STRING,
                    allowNull: false
                },
                group_id: {
                    type: DataTypes.NUMBER,
                    allowNull: true,
                    references: {
                        model: group,
                        key: 'id'
                    }
                }
            },
            {
                sequelize,
                tableName: 'user'
            }
        )

        this.addHook('beforeSave', async (people) => {
            if(people.password)
                people.password = await bcrypt.hash(people.password, 8)
        })

        this.addHook('beforeUpdate', async (people) => {
            if(people.password)
                people.password = await bcrypt.hash(people.password, 8)
        })

        return this
    }

    static associate(models) {
        this.belongsTo(models.group, { foreignKey: 'group_id' })
    }
}

module.exports = user
