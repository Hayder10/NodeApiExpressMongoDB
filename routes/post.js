//ALL ROUTES GOES HERE SENT BY APP.JS as Middleware, so it gets handled by this file and then the route executes what is written
//in the controllers folder!, that way the app is scalable and organized!

const express = require('express')
const postController = require('../controllers/post')
//ROUTER
const router = express.Router()

router.get('/', postController.getPosts)

module.exports = router ;
