const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema

const tokenSchema = new mongoose.Schema({
    token:{
        type:String,
        required: true
    },
    user:{
        type:ObjectId,
        required:true,
        ref:"UserModel"
    },
    CreatedAt:{
        type:Date,
        default:Date.now(),
        expires:86400 
    }
})
module.exports = mongoose.model("TokenModel", tokenSchema)
 