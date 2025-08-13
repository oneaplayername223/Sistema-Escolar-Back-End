import jwt from 'jsonwebtoken'

export const validateSession = (req, res, next) => {
    try {
        const token = req.cookies.accessToken;
        if (!token){
            return res.json({error: 'Token no proporcionado'})
        }

        
        const validate = jwt.verify(token, 'clave-secreta');
        const decode = jwt.decode(token, 'clave-secreta');
        const verifyAdmin = decode.data[2]


        if (validate && verifyAdmin === 'admin'){
            const decode = jwt.decode(token, 'clave-secreta');
            const nombre = [decode.data[0], decode.data[1], decode.data[2]]
            console.log(nombre)
            return next()
        } else{
            return res.json({Error: 'token invalido'})
        }
        
    } catch (error) {
        return res.json({Error: 'ha habido un error', error})
    }
}