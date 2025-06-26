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

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");

    app.listen(process.env.PORT || 5000, () => {
      console.log("Server is running");
    });
  } catch (err) {
    console.error("MongoDB connection failed:", err);
    process.exit(1);
  }
};

const port = 2000;
app.listen(port, () => {
  startServer();
  console.log(`server is running on port ${port}`);
});
