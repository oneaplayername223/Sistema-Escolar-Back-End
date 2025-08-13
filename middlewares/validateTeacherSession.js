import jwt from 'jsonwebtoken'

export const validateTeacherSession = (req, res, next) => {
    try {
    const token = req.cookies.accessToken
    const decode = jwt.decode(token, 'clave-secreta')
    
if (decode.data[2] !== 'profesor'){
    return res.json({Error: 'no tienes permiso para ver esta informacion'})
}
next()
    } catch (error) {
            return res.status(500).json({Error: 'ha habido un error', error})

    }
}