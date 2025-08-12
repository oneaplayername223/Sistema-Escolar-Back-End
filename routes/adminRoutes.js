import { Router } from "express";
import { adminInfoController, agregarProfesorController, agregarestudianteController, eliminarProfesorController } from "../controllers/adminControllers.js";
import { validateSession } from "../middlewares/validateSession.js";



const adminRoutes = Router()


adminRoutes.get('/admin/index', validateSession, adminInfoController)
adminRoutes.post('/admin/agregar/profesor', validateSession, agregarProfesorController)
adminRoutes.post('/admin/agregar/estudiante', validateSession, agregarestudianteController)
adminRoutes.delete('/admin/profesor/eliminar/:id', validateSession, eliminarProfesorController)


export default adminRoutes