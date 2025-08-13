import {buscarPorIdService, verAsistenciasService, agregarAsistenciaService, buscarEstudianteService, adminInfoService, agregarProfesorService, agregarestudianteService, eliminarProfesorService, agregarCursoService } from "../services/adminServices.js"
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'


export const adminInfoController = async(req, res) =>{
try {
    const decode = jwt.decode(req.cookies.accessToken, 'clave-secreta')
    const userInfo = decode.data[0]
    
    const data = await adminInfoService(userInfo)
   const results = data[0]
   if (results === null){
       return res.json({Usuario: decode.data[1], Profesores: 'no hay registros'})

   }
   else{
    
   return res.json({Usuario: decode.data[1], Rol: decode.data[2], Profesores: data})
   }
    
    
    
} catch (error) {
    return console.log(error)
    
}
}

export const agregarProfesorController = async(req, res) => {
    const {nombre, apellido, fechaNacimiento, celular, correo, carnet} = req.body
    try {
        const token = req.cookies.accessToken
        const decode = jwt.decode(token, 'clave-secreta')
        const id_cuenta = decode.data[0]
        const encrypt = bcrypt.hashSync(carnet, 10)
        const data = await agregarProfesorService(nombre, apellido, fechaNacimiento, celular, correo, carnet, id_cuenta, encrypt)
        return res.json(data)
        
        
    } catch (error) {

        return console.log(error)
        
    }
}

export const agregarestudianteController = async (req, res) => {
    try {
        const token = req.cookies.accessToken
        const decode = jwt.decode(token, 'clave-secreta')
        const id_cuenta = decode.data[0]
        const {nombre, apellido, fechaNacimiento, celular, correo, carnet} = req.body
        const encrypt = bcrypt.hashSync(carnet, 10)

        const data = await agregarestudianteService(nombre, apellido, fechaNacimiento, celular, correo, encrypt, id_cuenta, carnet)
        res.json({mensaje: 'Estudiante creado exitosamente'})
        
    } catch (error) {
        return console.log(error)
        
    }
}

export const eliminarProfesorController = async(req, res) => {
    try {
        const {id} = req.params
        const data = await eliminarProfesorService(id)
        if (data.affectedRows === 0){
            return res.json({Error: 'no hay profesores con ese Id'})
        }
    
        return res.json({mensaje: 'Profesor eliminado exitosamente'})

    } catch (error) {
    return console.log('controladores:', error)
        
    }
}


export const agregarCursoController = async(req, res) => {
    try {
        const {nombre, descripcion, fechaInicio, fechaFin} = req.body
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
        console.log(id)

    try {
       const data =  agregarAsistenciaService(id, fecha, id_cuenta)
        return res.json({mensaje: 'Asistencia creada exitosamente'})
        
    } catch (error) {
        
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
        return res.json({result})

    
    } catch (error) {
        res.status(500).json({Error: 'ha habido un error', error})
    }
}