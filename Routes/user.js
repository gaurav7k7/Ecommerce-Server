import express from "express";
import { login, profile, register, users } from "../Controllers/user.js";
import { Authenticated } from "../Middlewares/auth.js";
const router = express.Router();

//user router register
router.post("/register", register);

//user login router
router.post("/login", login);

//get all user
router.get("/all", users);

router.get("/profile", Authenticated, profile);

export default router;
