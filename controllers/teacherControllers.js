import {postTeacherHomeworkService} from "../services/teacherServices.js";
import jwt from "jsonwebtoken";

export const getTeacherInfoController = (req, res) =>{
    return res.json({Cursos: 'no hay cursos'})
}

export const postTeacherHomeworkController = async(req, res) =>{
    const {nombre, descripcion} = req.body
    if (!nombre || !descripcion) {
        return res.json({error: 'No Hay Datos'})
    }

    const token = req.cookies.accessToken
    const decode = jwt.decode(token, 'clave-secreta')
    const id_cuenta = decode.data[3]
    const id_profesor = decode.data[0]
 

    try {
        const data = await postTeacherHomeworkService(nombre, descripcion, id_profesor, id_cuenta)
        return res.json({mensaje: 'Tarea creada exitosamente'})
    } catch (error) {
        return console.log(error)
        
    }
        
}
    