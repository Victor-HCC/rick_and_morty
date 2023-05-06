const { DataTypes } = require('sequelize');

module.exports = (database) => {
   database.define('Favorite', {
      id: {
         type: DataTypes.INTEGER,
         autoInncrement: true,
         primaryKey: true
      },
      name: {
         type: DataTypes.STRING,
         unique: true,
         allowNull: false
      },
      gender: {
         type: DataTypes.STRING
      },
      status: {
         type: DataTypes.ENUM("Alive", "Dead", "Unknown"),
         defaultValue: "Alive"
      },
      Origin: {
         type: DataTypes.STRING,
         allowNull: false
      },
      species: {
         type: DataTypes.STRING
      }
   }, { timestamps: false });
};
