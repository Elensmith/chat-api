const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const User = require("../models/users");
const { devKey } = require("../config/config.js");

module.exports.getAllUsers = (req, res, next) => {
  User.findAll({
    attributes: {
      exclude: ['password']
    }
  })
    .then((users) => res.send({ data: users }))
    .catch(next);
};

module.exports.createUser = (req, res, next) => {
  const { name, email, password, avatar } = req.body;
  bcrypt.hash(password, 10).then((hash) => {
    User.create({
      email,
      password: hash,
      name,
      avatar
    })
      .then(() => {
        res.send({
          email,
          name,
        });
      })
      .catch((err) => {
        return next(err);
      });
  });
};

module.exports.login = (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email })
    .then((user) => {
      if (!user) {
        return Promise.reject(new Error('Неправильные почта или пароль'));
      }
      if (bcrypt.compare(password, user.password)) {
        const token = jwt.sign(
          { id: user.id },
          devKey, { expiresIn: "7d" },
        );
        res.send({ token });
      } else {
        return Promise.reject(new Error('Неправильные почта или пароль'));
      }
    })
    .catch((err) => {
      res
        .status(401)
        .send({ message: err.message });
    });
};