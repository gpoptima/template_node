
module.exports = function (sequelize, DataTypes) {

	const Model = sequelize.define('version', {
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
		precio: {
			type: DataTypes.DOUBLE(),
			allowNull: false
		},
		auto_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
                model: 'auto',
                key: 'id'
            }
		},
		estatus: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		}
	},
	{
		tableName: 'version'
	});

	Model.associate = (models) => {

		Model.belongsTo(models.auto, {
            foreignKey: 'auto_id',
        });

	}

	return Model;
};