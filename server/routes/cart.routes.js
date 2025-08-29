import express from "express";
import { getCart, addToCart, updateQuantity, removeFromCart, clearCart } from "../controller/cart.controller.js";

const router = express.Router();

router.route('/getCart/:userId').post(getCart);
router.route('/addToCart/:userId').post(addToCart);
router.route('/clear/:userId').get(clearCart);
router.route('/removeFromCart/:userId/:productId').delete(removeFromCart);
router.route('/updateQuantity/:userId/:productId').post(updateQuantity);

export default router;