const Sequelize = require('sequelize');
const { db } = require("../config/db");

const Posts = db.define("posts", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.DataTypes.INTEGER,
  },
  title: {
    type: Sequelize.DataTypes.STRING,
    allowNull: false
  },
  text: {
    type: Sequelize.DataTypes.STRING,
    allowNull: false
  },
  user_id: {
    type: Sequelize.DataTypes.INTEGER,
    allowNull: false
  },
  createdAt: {
    type: 'TIMESTAMP',
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    allowNull: false
  },
  updatedAt: {
    type: 'TIMESTAMP',
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    allowNull: false
  }
})

module.exports = Posts;