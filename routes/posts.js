const PostsRouter = require("express").Router();
const {
  getPosts,
  createPost,
  getAllPosts,
} = require("../controllers/posts");


PostsRouter.get("/", getAllPosts);
PostsRouter.get("/owner", getPosts);
PostsRouter.post("/", createPost);


module.exports = PostsRouter;