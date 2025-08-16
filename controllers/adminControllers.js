//dependencies
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import Joi from 'joi'
//Services

import {buscarPorIdService, verAsistenciasService, agregarAsistenciaService, buscarEstudianteService, adminInfoService, agregarProfesorService, agregarestudianteService, eliminarProfesorService, agregarCursoService } from "../services/adminServices.js"

//JOI

import addTeacherSchema from '../schemas/addTeacherSchema.js'
import addStudentSchema from '../schemas/addStudentSchema.js'
import addClassSchema from '../schemas/addClassSchema.js'

export const adminInfoController = async(req, res) =>{
try {
    const decode = jwt.decode(req.cookies.accessToken, 'clave-secreta')
    const userInfo = decode.data[0]
    
    const data = await adminInfoService(userInfo)
   const results = data[0]
   if (results === null){
       return res.status(404).json({Usuario: decode.data[1], Profesores: 'no hay registros'})

   }
   else{
    
   return res.status(200).json({Usuario: decode.data[1], Rol: decode.data[2], Profesores: data})
   }
    
    
    
} catch (error) {
       return res.status(500).json({Error: 'ha habido un error', error})
    
}
}

export const agregarProfesorController = async(req, res) => {
    const {nombre, apellido, fechaNacimiento, celular, correo, carnet} = req.body

const {error, value} = addTeacherSchema(req.body)

if (error){
    return res.status(400).json({Error: error.details[0].message})
}
    try {
        const token = req.cookies.accessToken
        const decode = jwt.decode(token, 'clave-secreta')
        const id_cuenta = decode.data[0]
        const encrypt = bcrypt.hashSync(carnet, 10)
        const data = await agregarProfesorService(nombre, apellido, fechaNacimiento, celular, correo, carnet, id_cuenta, encrypt)
        return res.status(200).json({mensaje: 'Profesor creado exitosamente'})
        
        
    } catch (error) {

       return res.status(500).json({Error: 'ha habido un error', error})
        
    }
}

export const agregarestudianteController = async (req, res) => {
    try {
        const token = req.cookies.accessToken
        const decode = jwt.decode(token, 'clave-secreta')
        const id_cuenta = decode.data[0]
        const {nombre, apellido, fechaNacimiento, celular, correo, carnet} = req.body

        const {error, value} = addStudentSchema(req.body)

        if (error){
            return res.status(400).json({Error: error.details[0].message})
        }

        const encrypt = bcrypt.hashSync(carnet, 10)

        const data = await agregarestudianteService(nombre, apellido, fechaNacimiento, celular, correo, encrypt, id_cuenta, carnet)
        res.status(200).json({mensaje: 'Estudiante creado exitosamente'})
        
    } catch (error) {
       return res.status(500).json({Error: 'ha habido un error', error})
        
    }
}

export const eliminarProfesorController = async(req, res) => {
    try {
        const {id} = req.params
        const data = await eliminarProfesorService(id)
        if (data.affectedRows === 0){
            return res.status(404).json({Error: 'no hay profesores con ese Id'})
        }
    
        return res.status(200).json({mensaje: 'Profesor eliminado exitosamente'})

    } catch (error) {
       return res.status(500).json({Error: 'ha habido un error', error})
        
    }
}


export const agregarCursoController = async(req, res) => {
    try {
        const {nombre, descripcion, fechaInicio, fechaFin} = req.body
        const { error } = addClassSchema(req.body)
        if (error){
            return res.status(400).json({Error: error.details[0].message})
        }

        const token = req.cookies.accessToken
        const decode = jwt.decode(token, 'clave-secreta')
        const id_cuenta = decode.data[0]
        const data = await agregarCursoService(nombre, descripcion, fechaInicio, fechaFin, id_cuenta)

        return res.status(200).json({mensaje: 'Curso creado exitosamente'})
        
    } catch (error) {
        return res.status(500).json({Errors: 'ha habido un error', error})
        
    }
}


export const agregarAsistenciaController = async (req, res) => {

        const {id, fecha} = req.body
        const data = await buscarEstudianteService(id)
        const results = data[0]

        if (!results){
            return res.status(404).json({Error: 'Estudiante no encontrado'})
        }

        const id_cuenta = results.id_cuenta

    try {
       const data =  agregarAsistenciaService(id, fecha, id_cuenta)
        return res.status(200).json({mensaje: 'Asistencia creada exitosamente'})
        
    } catch (error) {
         return res.status(500).json({Error: 'ha habido un error', error})

    }
}

export const verAsistenciasController = async(req, res) => {

    
    try {
        const decode = jwt.decode(req.cookies.accessToken, 'clave-secreta')
        const userInfo = decode.data[0]
        const data = await verAsistenciasService(userInfo)

        const results = data[0]

        if (!results){
            return res.status(404).json({Error: 'Estudiante no encontrado'})
        }
        const fecha = results.fecha
        const id_estudiante = [results.id_estudiante]
        
        const infoEstudiante = await buscarPorIdService(userInfo)
        const result = [infoEstudiante, fecha]
        return res.status(200).json({result})

    
    } catch (error) {
       return res.status(500).json({Error: 'ha habido un error', error})
    }
}