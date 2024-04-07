const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    category_name:{
        type:String,
        requried:true,
        trim:true
    }
    },{timestamps:true})

    module.exports = mongoose.model("CategoryModel", categorySchema)