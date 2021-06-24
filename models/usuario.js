module.exports = function (sequelize, DataTypes) {
    
    let Model = sequelize.define('usuario', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },

        name: {
            type: DataTypes.STRING(50),
            allowNull: false
        },

        email: {
            type: DataTypes.STRING(70),
            allowNull: false
        },

        password: {
            type: DataTypes.STRING(255),
            allowNull: false
        },

        token:{
            type: DataTypes.STRING(255),
            allowNull: true
        },
        active: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            defaultValue: 1
        }
    }, {
        tableName: 'usuario',
    })

    return Model
}