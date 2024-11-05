// Import Express
import express from 'express'
//import Product Controller
import ProductController from './product.controller.js'
// crete instance for ProductController so can accese Functions
const productController = new ProductController()
// create Routes
const router = express.Router()

router.post('/create',(req,res)=>{
    productController.addProduct(req,res)
})
router.get('/products',(req,res)=>{
    productController.getAllProducts(req,res)
})
router.delete('/product/:id',(req,res)=>{
    productController.removeProducts(req,res)
})
router.post('/products/:id/update_quantity',(req,res)=>{
    console.log("in side function")
    productController.updateProducts(req,res)
})

export {router}