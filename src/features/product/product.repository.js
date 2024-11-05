import mongoose from "mongoose";
// Import product schema
import { itemSchema } from "./product.modal.js";

// Create model for product schema
const ProductModal = mongoose.model('Product', itemSchema);

export default class ProductRepository {
    // Create function to add product, receiving parameters from controller
    async addProduct(products) {
        try {
            // Create a new product instance and save it to the database
            const result = new ProductModal(products);
            await result.save(); // Await the save operation
            return result; // Return the saved product for confirmation or further processing
        } catch (error) {
            console.error("Error adding product:", error); // Log the error
             return  new Error("Failed to add product"); // Optionally, rethrow with a custom message
        }
    }
    async getAllProducts(){
        try {
            const result =  await ProductModal.find()
            return result
        } catch (error) {
            console.error("Error adding product:", error); // Log the error
            return  new Error("Failed to add product"); 
        }
    }
    async deleteProduct(_id){
        console.log("in repod",_id)
        try {
            const result = await ProductModal.findByIdAndDelete(_id);
            return result;
        } catch (error) {
            console.error("Error deleting product in repository:", error);
            throw new Error("Failed to delete product");
        }
    }
    async updateQuantity(id,quantity){
        console.log("id & qty",id,quantity)
        try {
             const result = await ProductModal.findByIdAndUpdate(
                id,
                { quantity } ,  // Adjust quantity
                { new: true }  // Return the updated document
            );
            console.log("result",result)
            return result
        } catch (error) {
            console.error("Error deleting product in repository:", error);
            throw new Error("Failed to delete product");
        }
    }
}
