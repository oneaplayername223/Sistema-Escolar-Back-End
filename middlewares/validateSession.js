import jwt from 'jsonwebtoken'

export const validateSession = (req, res, next) => {
    try {
        const token = req.cookies.accessToken;
        if (!token){
            return res.json({error: 'Token no proporcionado'})
        }

        
        const validate = jwt.verify(token, 'clave-secreta');
        
        if (validate){
            const decode = jwt.decode(token, 'clave-secreta');
            const nombre = decode.data[1]
            console.log('Bienvenid@,', nombre)
            return next()
        } else{
            return console.log('token invalido')
        }
        
    } catch (error) {
        return res.json({error: 'ha habido un error', error})
    }
}