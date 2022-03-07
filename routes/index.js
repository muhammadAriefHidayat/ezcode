const postRoute = require("./posts")
const route = require("express").Router()

route.use("/post",postRoute)
module.exports = route