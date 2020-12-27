const Post = require("../models/posts");

module.exports.getPosts = (req, res, next) => {
  Post.find({ user_id: req.user.id })
    .then((posts) => res.send({ data: posts }))
    .catch(next);
};

module.exports.getAllPosts = (req, res, next) => {
  Post.findAll()
    .then((posts) => res.send({ data: posts }))
    .catch(next);
};

module.exports.createPost = (req, res, next) => {
  const {
    title, text
  } = req.body;
  Post.create({
    title,
    text,
    user_id: req.user.id,
  })
    .then((post) => {
      res.send({ data: post });
    })
    .catch((err) => {
      return Promise.reject(new Error(err));
    });
};

// module.exports.deletePostById = (req, res, next) => {
//   Post.findById(req.params.id)
//     .select("+owner")
//     .then((post) => {
//       if (post === null) {
//         return next(new Error(err));
//       }
//       if (post.owner.toString() !== req.user._id.toString()) {
//         return Promise.reject(new Error(err));
//       }
//       return Post.deleteOne(post)
//         .then(() => res.send(post))
//         .catch(next);
//     })
//     .catch((err) => {
//       next(err);
//     });
// };