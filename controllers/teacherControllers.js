import {postTeacherHomeworkService, getIdCuentaService} from "../services/teacherServices.js";
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
    const id_profesor = decode.data[0]
    console.log(id_profesor)
        
    const getIdCuenta = await getIdCuentaService(id_profesor)
    console.log(getIdCuenta)

    

/*

    try {
        const data = await postTeacherHomeworkService(nombre, descripcion, id_profesor)
        return res.json(data)
    } catch (error) {
        return console.log(error)
        
    }
        */
}
    