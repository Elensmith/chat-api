const Sequelize = require('sequelize');
const { db } = require("../config/db");

const Users = db.define("users", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.DataTypes.INTEGER,
  },
  name: {
    type: Sequelize.DataTypes.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [2, 100]
      }
    }
  },
  email: {
    type: Sequelize.DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: {
        msg: "Must be an email"
      }
    }
  },
  password: {
    type: Sequelize.DataTypes.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [8, 30]
      }
    }
  },
  avatar: {
    type: Sequelize.DataTypes.STRING,
    allowNull: false,
    validate: {
      isUrl: {
        msg: "Wrong url format"
      }
    }
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

module.exports = Users;