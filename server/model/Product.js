const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const productSchema = new Schema(
    {
        name: { type: String, require: true },
        price: { type: Number },
        compare_at_price: { type: Number },
        description: { type: String },
        estimate_ship_date: { type: Date, default: Date.now },
        tags: { type: Array },
        images: [{ name: String, base64: String }],
        thumbnails: [{ name: String, base64: String }],
    },
    {
        timestamps: true,
    },
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
