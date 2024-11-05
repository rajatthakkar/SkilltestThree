//1. import Mongoose.
import mongoose from "mongoose";
//2. create schemma for modal
const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  quantity: {
    type: Number,
    required: true,
    min: 0
  }
});
//3. export schema 
export {itemSchema}
