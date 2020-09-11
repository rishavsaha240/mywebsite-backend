"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PersonalDetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PersonalDetails.init(
    {
      qualification: DataTypes.STRING,
      instituteName: DataTypes.STRING,
      durationStart: DataTypes.STRING,
      durationEnd: DataTypes.STRING,
      order: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "PersonalDetails",
    }
  );
  return PersonalDetails;
};
