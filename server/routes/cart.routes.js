import express from "express";
import { getCart, addToCart, updateQuantity, removeIndividualProductFromCart, clearCart } from "../controller/cart.controller.js";

const router = express.Router();

router.route('/getCart/:userId').post(getCart);
router.route('/addToCart/:userId').post(addToCart);
router.route('/updateQuantity/:userId/:productId').post(updateQuantity);
router.route('/removeIndividualProductFromCart/:userId/:productId').delete(removeIndividualProductFromCart);
router.route('/clear/:userId').delete(clearCart);

export default router;