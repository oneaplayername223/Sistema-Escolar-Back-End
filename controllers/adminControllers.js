import { adminInfoService, agregarProfesorService, agregarestudianteService, eliminarProfesorService } from "../services/adminServices.js"
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
export const adminInfoController = async(req, res) =>{
try {
    const decode = jwt.decode(req.cookies.accessToken, 'clave-secreta')
    //const userInfo = [decode.data[1], decode.data[2]]
    const data = await adminInfoService()
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



