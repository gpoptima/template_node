module.exports = function (sequelize, DataTypes) {

	const Model = sequelize.define('auto', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		nombre: {
			type: DataTypes.CHAR(50),
			allowNull: false,
		},
		descripcion: {
			type: DataTypes.CHAR(120),
			allowNull: false
		},
		estatus: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		}
	},
	{
		tableName: 'auto'
	});

	Model.associate = (models) => {

		Model.hasMany(models.version, {
            as: 'versiones',
            foreignKey: 'auto_id',
            sourceKey: 'id'
        });
	}

	return Model;
};