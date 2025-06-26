import { Products } from "../Models/Product.js";

export const addProduct = async (req, res) => {
  const { title, description, price, category, qty, imgSrc } = req.body;
  try {
    let product = await Products.create({
      title,
      description,
      price,
      category,
      qty,
      imgSrc,
    });
    res.json({ message: "Product added successfully...!", product });
  } catch (error) {
    res.json(error.message);
  }
};

export const allProduct = async (req, res) => {
  try {
    let allProducts = await Products.find().sort({ createdAt: -1 });
    res.json({ message: "all product fetched", allProducts, success: true });
  } catch (error) {
    res.json(error.message);
  }
};

export const productById = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Products.findById(id);
    if (!product)
      return res.json({ message: "product not found", success: false });
    res.json({ message: "specific product ", product, success: true });
  } catch (error) {
    res.json(error.message);
  }
};

export const updateProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Products.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!product) return res.json({ message: "product not found" });
    res.json({ message: "product has been updated", product, success: false });
  } catch (error) {
    res.json(error.message);
  }
};

export const deleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Products.findByIdAndDelete(id);
    if (!product)
      return res.json({ message: "product not found", succes: false });
    res.json({ message: "product has been deleted", product, success: true });
  } catch (error) {
    res.json(error.message);
  }
};
