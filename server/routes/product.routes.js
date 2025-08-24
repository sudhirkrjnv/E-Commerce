import exress from "express";
import { uploadProduct ,getProduct, getProductByCategories } from "../controller/product.controller.js";

const router = exress.Router();

router.route('/uploadProduct').post(uploadProduct);
router.route('/getProduct').get(getProduct);
router.route('/getProductByCategories/:type').get(getProductByCategories);

export default router;