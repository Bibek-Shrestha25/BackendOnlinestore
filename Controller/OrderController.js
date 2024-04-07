const orderModel = require("../Model/orderModel")
const orderModel = require("../Model/orderItemModel")
const orderModel = require("../Model/userModel")
const AddressModel = require("../Model/addressModel")

//place order
exports.placeOrder = async(req, res)=>{ 
let orderItemsIds = await Promise.all( req.body.orderItems.map(async orderItem => {
    let orderItem = await OrderItemsModel.create({
        product:orderItem.product,
        quantity: orderItem.quantity
    })
    if(!orderItem)
    return res.status(400).json({error:"Something went wrong."})
})
   )
   let individual_total = await Promise.all(
    orderItemsIds.map(async item_id =>{
        let item = await ProductModel.findById(item_id).populate('Product', 'price')
        return item.product.price * item.quantity
    })
   )

   let total = individual_total.reduce((acc, cur)=> acc+cur)
   if(req.body.address){
    address = new AddressModel.address.create({
    street: req.body.address.street,
    city: req.body.address.city,
    state: req.body.address.state,
    Zipcode: req.body.address.Zipcode,
    country: req.body.address.country,
    country_code: req.body.address.country_code,
    phone: req.body.address.phone,
})
   }

   let user = await userModel.findById(req.body.user)

   let order = await orderModel.create({
    orerItems: orderItemsIds,
    total:total,
    user:req.body.user,
    address: req.body.address? address_id: user.address
   })
   if(!order){
    return req.body.status(400).json({error:"Failed to place order"})
   }
   res.send(order)

}
