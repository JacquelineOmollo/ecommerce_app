import express from "express";
import {authUser} from "../controllers/authUser";
const router = express.Router();

router.route("/login", authUser)



export default router;
