const mongoose = require("mongoose");
const orderItemModel = require("./orderItemModel");
const { ObjectId } = mongoose.Schema;

const orderSchema = new mongoose.Schema(
    {
        orderItems:[{
            type:ObjectId,
            ref:"orderItemModel",
            required:true

        },
        ],
        user:{
            type:ObjectId,
            ref:"UserModel",
            required:true,
        },
        total:{
            type:Number,
            required:true,

        },
        address:{
            type:ObjectId,
            ref:"AddressModel"
        },
        orderStatus:{
            type:String,
            requited:true,
            default:"pending"
        },
        payment_Status:{
            type:String,
            default: "pending"
        }
    
    },
    {timestamps: true}
)
module.exports = mongoose.model("orderSchema",orderSchema)


