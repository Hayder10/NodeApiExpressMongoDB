//ALL ROUTES GOES HERE SENT BY APP.JS as Middleware, so it gets handled by this file and then the route executes what is written
//in the controllers folder!, that way the app is scalable and organized!

const express = require('express')
const { getPosts , createPost } = require('../controllers/post') // controller importation
const validator = require('../validator') //  validator importation
//ROUTER
const router = express.Router()

router.get('/', getPosts)
router.post('/post', validator.createPostValidator, createPost)

module.exports = router ;
