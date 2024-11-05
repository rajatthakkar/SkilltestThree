import express from "express";
import { router } from "./src/features/product/product.routes.js";


const app = express();
app.use(express.json());
app.use('/api/product',router)

export default app