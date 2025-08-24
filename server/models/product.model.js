import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        type:{type:String, required:true},
        name:{type:String, required:true},
        img:{type:String, required:true, trim:true},
        brand:{type:String, required:true},
        description:{type:String, trim:true},
        stars:{type:String},
        brought:{type:String},
        price:{type:String, required:true, trim:true},
        mrp:{type:String, required:true, trim:true},
        off:{type:String},
        flatoff:{type:String},
        card:{type:String},
        emi: { type: String },
        withexchange: { type: String },
        withoutexchange: { type: String },
        delivery: { type: String },
        availability: { type: String },
        about: [{ type: String }],
    },
    {timestamps:true}
)
export const Product = mongoose.model("Product", productSchema);
