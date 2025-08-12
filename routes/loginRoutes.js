import { Router } from "express";
import { loginController, registerController } from "../controllers/loginControllers.js";

const loginRoutes = Router()



loginRoutes.post('/login', loginController)
loginRoutes.post('/register', registerController)



export default loginRoutes