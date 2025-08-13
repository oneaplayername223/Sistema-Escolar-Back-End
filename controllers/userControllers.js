import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
export const getUserInfoController = (req, res) => {
try {
    const token = req.cookies.accessToken
    const decode = jwt.decode(token, 'clave-secreta')
   console.log({Usuario: decode.data[1], Rol: decode.data[2]})
    return res.json({Cursos: 'no hay cursos'})


} catch (error) {
    return res.status(500).json({Error: 'ha habido un error', error})
}
   
}