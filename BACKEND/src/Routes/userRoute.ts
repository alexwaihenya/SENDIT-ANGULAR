import { Router } from "express";
import { checkUser, getAllUsers, getHomepage, login, register } from "../Controllers/userController";
import { VerifyToken } from "../Middleware/VerifyToken";


const router = Router()
router.post('/register',register)
router.post('/login',login)
router.get('/homepage',VerifyToken,getHomepage)
router.get('/check',VerifyToken,checkUser)
router.get('/all',getAllUsers)


export default router