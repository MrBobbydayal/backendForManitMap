import { Router } from "express";
import { loginUser,logoutUser,getUserChannelProfile,registerUser } from "../controller/user.controller.js";
import {verifyJWT} from '../middleware/auth.middleware.js'
import multer from "multer";
import { upload } from "../middleware/multer.middleware.js";

const router = Router()

router.route("/register").post(
    // upload(),
    registerUser
    )

router.route("/login").post(loginUser)

//secured routes
router.route("/logout").post( verifyJWT, logoutUser)

router.route("/username").get(verifyJWT, getUserChannelProfile)

export default router