const Products = require("./models/productSchema")
const items = require("./constants/productsdata");

const Defaultdata = async()=>{
    try {
        await Products.deleteMany({});
        const storedata  = await Products.insertMany(items);
        console.log(storedata);
    } catch (error) {
        console.log("Error"+ error.messaage);
    }
}

module.exports = Defaultdata;