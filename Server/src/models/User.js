const { DataTypes } = require('sequelize');

module.exports = (database) => {
   database.define('User', {
      id: {
         type: DataTypes.INTEGER,
         autoInncrement: true,
         primaryKey: true
      },
      email: {
         type: DataTypes.STRING,
         unique: true,
         allowNull: false
      },
      password: {
         type: DataTypes.STRING,
         allowNull: false
      }
   }, { timestamps: false });
};
