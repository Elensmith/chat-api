const { errors } = require("celebrate");
const auth = require('../middlewares/auth');
const UsersRouter = require("./users");
const PostsRouter = require("./posts");
const { createUser, login } = require("../controllers/users");


module.exports = function (app) {
  app.use("/", PostsRouter);
  app.post("/signup", createUser);
  app.post("/signin", login);
  app.use("/users", auth, UsersRouter);
  app.use("/posts", auth, PostsRouter);
  app.use(errors());
}
