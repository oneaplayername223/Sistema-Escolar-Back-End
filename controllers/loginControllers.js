//Services

import { loginService, registerService } from "../services/loginServices.js"

//Sependencies
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

//Schemes

import registerSchema from "../schemas/registerSchema.js"
import loginSchema from "../schemas/loginSchema.js"

export const registerController = async(req, res) =>{
    try {
        const {nombre, usuario, clave, rol} = req.body

        const {error} = registerSchema(req.body)

        if (error)
        {
            return res.status(400).json({Error: error.details[0].message})
        }

        const encrypt = bcrypt.hashSync(clave, 10)
        const data = await registerService(nombre, usuario, encrypt, rol)
        return res.json({mensaje: 'usuario creado exitosamente'})
        
    } catch (error) {
        console.log('ha habido un error:', error)
        
    }
}


export const loginController = async(req, res) =>{
try {
const {usuario, clave} = req.body

const {error} = loginSchema(req.body)

if(error){
    return res.status(400).json({Error: error.details[0].message})
}

const data = await loginService(usuario)

const results = data[0]

if (results == null ){
    return res.json({mensaje: 'Credenciales Invalidas'})
}

const compare = bcrypt.compareSync(clave, results.clave)
const nombre = results.nombre
const userData = [results.id, results.nombre, results.rol, results.id_cuenta]



if (compare){
    const token = jwt.sign({ data: userData }, 'clave-secreta', {expiresIn: '1h'});  
    
res.cookie('accessToken', token, {
  httpOnly: true,
  secure: false, //desarrollo 
  sameSite: 'Strict'
});


    return res.json({mensaje: `Sesion Iniciada Como: ${nombre}`})
    

    }
    else{
        return res.json({mensaje: 'Credenciales Invalidas'})
    }


    } catch (error) {

    console.log(error)
    return res.status(500).json({Controllers: 'ha habido un error'})
    
}
}