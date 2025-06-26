import express from "express";
import {
  addProduct,
  allProduct,
  deleteProduct,
  productById,
  updateProduct,
} from "../Controllers/product.js";

const router = express.Router();

router.post("/add", addProduct);

router.get("/all", allProduct);

router.get("/:id", productById);

router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);

export default router;
