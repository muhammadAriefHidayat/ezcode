const {PostController} = require("../controller")
const route = require("express").Router()

route.get("/", PostController.getPosts)

module.exports = route
