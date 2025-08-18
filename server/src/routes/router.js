const express = require("express");
const Products = require("../models/productSchema");

const router = new express.Router();

//getproducts api
router.get("/getproducts", async(req, res)=>{
    try {
        const productsdata = await Products.find();
        console.log(productsdata);
        res.status(201)
            .json(productsdata);
    } catch (error) {
       console.log("Error"+error.message); 
    }
})

//get individual data api
router.get("/getproductsone/:id", async(req, res)=>{
    try {
        const {id} = req.params;
        const individualdata = await Products.findOne({id:id});
        res.status(201)
            .json(individualdata);

    } catch (error) {
        res.status(400)
            .json(individualdata);
        console.log("Error"+error.message); 
    }
})


module.exports = router;