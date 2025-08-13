import { Router } from "express";
import { getTeacherInfoController, postTeacherHomeworkController } from "../controllers/teacherControllers.js";
import { validateTeacherSession } from "../middlewares/validateTeacherSession.js";
const teacherRoutes = Router()


teacherRoutes.get('/profesor/index', validateTeacherSession, getTeacherInfoController) 
teacherRoutes.post('/profesor/agregar/cursos', validateTeacherSession, postTeacherHomeworkController)

export default teacherRoutes