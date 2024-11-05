//import Product repository
import ProductRepository from "./product.repository.js"
import mongoose from "mongoose";
export default class ProductController {
    constructor() {
        this.productRepo = new ProductRepository()
    }
    async addProduct(req, res) {
        const { name, quantity } = req.body; // Destructure name and quantity from request body
        try {
            // Call the addProduct method and await the result
            const result = await this.productRepo.addProduct({ name, quantity });

            // Send a successful response back to the client
            return res.status(201).json({
                success: true,
                message: 'Product added successfully',
                product: result // Include the added product in the response
            });
        } catch (error) {
            console.error("Error adding product:", error); // Log the error

            // Send an error response to the client
            return res.status(500).json({
                success: false,
                message: 'Failed to add product',
                error: error.message // Include the error message for debugging
            });
        }
    }
    //create function for get all products and pass req and res objeact in it
    async getAllProducts(req, res) {
        //write try catch block to handle the errors
        try {
            //write a variable which take data from the data base and assign Product repo instance
            const result = await this.productRepo.getAllProducts()
            res.status(200).json({ status: 'true', message: 'product has been fetched', result })

        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Failed to add product',
                error: error.message // Include the error message for debugging
            });
        }
    }
    //write a function for delet Product from data base
    async removeProducts(req, res) {
        const _id = req.params.id;
        console.log("ID", _id)

        try {
            if (!mongoose.Types.ObjectId.isValid(_id)) {
                return res.status(400).json({
                    success: false,
                    message: 'Invalid Product ID format'
                });
            }
            //write a variable which take data from the data base and assign Product repo instance
            const result = await this.productRepo.deleteProduct(_id)
            if (!result) {
                return res.status(404).json({
                    success: false,
                    message: 'Product not found'
                });
            }
            res.status(200).json({ status: 'true', message: 'Product has been deleted' })

        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Failed to add product',
                error: error.message // Include the error message for debugging
            });
        }
    }
    async updateProducts(req, res) {
        const id = req.params.id;
        const number = parseInt(req.query.number);
        console.log(id)
        console.log(number)
        try {
            // Ensure the number is a valid integer

            const result = await this.productRepo.updateQuantity(id, number)
            res.status(200).json({
                success: true,
                message: "Product quantity updated successfully",
                product: result
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: "Failed to update product quantity",
                error: error.message
            });
        }
    }
}