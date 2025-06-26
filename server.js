import express from "express";
import mongoose from "mongoose";
import userRouter from "./Routes/user.js";
import bodyParser from "express";
import productRouter from "./Routes/product.js";
import cartRouter from "./Routes/cart.js";
import addressRouter from "./Routes/address.js";
import dotenv from "dotenv";
import cors from "cors";
const app = express();

app.use(bodyParser.json());

dotenv.config();

app.use(
  cors({
    origin: true,
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  })
);
//home route
app.get("/", (req, res) => {
  res.json({ message: "this is a home page" });
});

//user route
app.use("/api/user", userRouter);

//product route
app.use("/api/product", productRouter);

//cart router
app.use("/api/cart", cartRouter);

// address Router
app.use("/api/address", addressRouter);

mongoose
  .connect(
    "mongodb+srv://gk285208:ZtMburcn9jku6xvS@cluster0.ebm9ffy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("mongodb is connected.....");
  })
  .catch((err) => {
    console.log("error", err);
  });

const port = 2000;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
