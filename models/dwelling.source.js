'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class DwellingSource extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    DwellingSource.init({
        enable: DataTypes.BOOLEAN,
        name: DataTypes.STRING,
        baseUrl: DataTypes.STRING,
        params: {
            location: DataTypes.STRING
        },
        tags: {
            container: DataTypes.STRING
        }
    }, {
        sequelize,
        modelName: 'DwellingSource',
    });
    return DwellingSource;
};