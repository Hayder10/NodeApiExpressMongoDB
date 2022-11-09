const Post = require('../models/post.js')

exports.getPosts = (req,res) => {
    const posts =  Post.find().select("_id title body")// <- filtering whats in the response, we do not want in this case the __v part of body
    .then((posts) => {
        res.json({ posts  })
    })
    .catch(err => console.log(err))
}


exports.createPost = (req,res) => {
    const post = new Post(req.body)
    //console.log("Creating Post: ", req.body);
    /* post.save((err,result) => {
        res.status(200).json({
            post: result
        })
    }) */
    post.save()
    .then(result => {
        res.json({
            post: result
        })
    })
}