import asyncHandler from "express-async-handler";
import User from "../models/users.js";


// @desc  Auth the user and get token request
// @route  POST /api/users/login
// @access Public

const authUser = asyncHandler(async (req,res) => {
    const { email, password} = res.body
        res.send(email, password)
})

export default {authUser}