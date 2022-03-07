const {Posts} = require("../models")

class PostController {
   static async getPosts(req,res){
       try {
           console.log("wellcome")
       } catch (error) {
           console.log(error)
       }
   }
}
module.exports = PostController