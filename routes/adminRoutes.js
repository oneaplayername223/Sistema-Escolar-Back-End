import { Router } from "express";
import {verEstudiantesController, agregarAsistenciaController, adminInfoController, agregarProfesorController, agregarestudianteController, eliminarProfesorController, agregarCursoController } from "../controllers/adminControllers.js";
import { validateSession } from "../middlewares/validateSession.js";



const adminRoutes = Router()


adminRoutes.get('/admin/index', validateSession, adminInfoController)
adminRoutes.get('/admin/asistencias', validateSession, verEstudiantesController)
adminRoutes.post('/admin/agregar/profesor', validateSession, agregarProfesorController)
adminRoutes.post('/admin/agregar/estudiante', validateSession, agregarestudianteController)
adminRoutes.post('/admin/agregar/curso', validateSession, agregarCursoController)
adminRoutes.post('/admin/asistencia/estudiante', validateSession, agregarAsistenciaController)

adminRoutes.delete('/admin/profesor/eliminar/:id', validateSession, eliminarProfesorController)


export default adminRoutes