const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    id: String,
    img: String,
    name: String,
    stars: String,
    ratings: String,
    brought: String,
    price: String,
    mrp: String,
    off: String,
    flatoff: String,
    card: String,
    emi: String,
    withexchange: String,
    withoutexchange: String,
    delivery: String,
    availibility: String,
    about: Object
});

const Products = mongoose.model("products", productSchema);

module.exports = Products;
