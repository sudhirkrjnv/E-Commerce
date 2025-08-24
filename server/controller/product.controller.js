import {Product} from '../models/product.model.js'

export const uploadProduct = async(req, res)=>{
    try {
        const {type, name, img, brand, price, mrp, ratings, off, flatoff, card, emi, withexchange, withoutexchange, delivery, availability, about, brought} = req.body;

        const product = await Product.create({type, name, img, brand, price, mrp, ratings, off, flatoff, card, emi, withexchange, withoutexchange, delivery, availability, about, brought});

        return res.status(201).json({
            message: 'Product uploaded successfully', 
            success:true,
            product
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({message: 'Product upload failed', success:false});
    }
}

export const getProduct = async(req, res)=>{
    try {
        const products = await Product.find();
        if(!products) return res.status(404).json({message: 'No products found', success:false});

        return res.status(200).json({products, success:true});
    } catch (error) {
        console.error(error);
    }
}
export const getProductByCategories = async(req, res)=>{
    try {
        const {type} = req.params;

        const products = await Product.find({type} );
        if(!products) return res.status(404).json({message: 'No products found', success:false});
        
        return res.status(200).json({products, success:true});
    } catch (error) {
        console.error(error);
    }
}
export const getProductById = async(req, res)=>{
    try {
        const {id} = req.params;

        const product = await Product.findById(id);
        if(!product) return res.status(404).json({message: 'No product found', success:false});

        return res.status(200).json({product, success:true});

    } catch (error) {
        console.error(error);
    }
}