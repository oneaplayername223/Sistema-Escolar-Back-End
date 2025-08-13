import { Router } from "express";
import { getUserInfoController } from "../controllers/userControllers.js";
import { validateUserSession } from "../middlewares/validateUserSession.js";
const userRoutes = Router()


userRoutes.get('/user/index', validateUserSession, getUserInfoController)

export default userRoutes