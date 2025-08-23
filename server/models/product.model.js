import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        type:{type:String, required:true},
        name:{type:String, required:true},
        imag:{type:String, required:true, trim:true},
        brand:{type:String, required:true},
        stars:{type:String},
        brought:{type:String},
        price:{type:String, required:'true', trim:true},
        mrp:{type:String, required:'true', trim:true},
        flatoff:{type:String},
        card:{type:String},
    },
    {timestamps:true}
)
export const Product = mongoose.model("Product", productSchema);