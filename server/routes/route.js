import express from 'express';
import { userSignUp, userLogIn } from '../controller/user-controller.js';
import { getproducts } from '../controller/product-controller.js';
const router = express.Router();
//login & signup
router.post('/signup', userSignUp);
router.post('/login', userLogIn);
router.get('/products',getProducts);
export default router ;  