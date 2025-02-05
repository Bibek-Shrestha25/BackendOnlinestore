const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const OrderItemSchema = new mongoose.Schema(
  {
    product: {
      type: ObjectId,
      ref: "ProductModel",
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("OrderItemSchema", OrderItemSchema);
