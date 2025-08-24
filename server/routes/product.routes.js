import exress from "express";
import { uploadProduct ,getProduct, getProductByCategories, getProductById } from "../controller/product.controller.js";

const router = exress.Router();

router.route('/uploadProduct').post(uploadProduct);
router.route('/getProduct').get(getProduct);
router.route('/getProductByCategories/:type').get(getProductByCategories);
router.route('/getProductById/:id').get(getProductById);

export default router;