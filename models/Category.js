const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

// category model defined with id and category_name //
Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNULL: false,
      primaryKey: true,
      autoIncrement: true
  },
  category_name: { 
    type: DataTypes.STRING,
    allowNull: false
  }
},
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
