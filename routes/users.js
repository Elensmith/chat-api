const UsersRouter = require("express").Router();
const {
  createUser,
  login,
  getAllUsers,
} = require("../controllers/users");

UsersRouter.get("/", getAllUsers);
UsersRouter.post("/signup", createUser);
UsersRouter.post("/signin", login);

module.exports = UsersRouter;