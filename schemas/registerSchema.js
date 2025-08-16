import Joi from "joi";


const registerSchema = (schema) => (payload) =>
    schema.validate(payload, { abortEarly: false });



const schema = Joi.object({

    nombre: Joi.string().min(2).max(20).required().messages({
        'string.min': 'El nombre debe tener al menos {#limit} caracteres',
        'string.max': 'El nombre debe tener máximo {#limit} caracteres',
        'any.required': 'El nombre es requerido',
    }),
    
    correo: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required().messages({
        'string.email': 'El correo debe ser válido',
        'any.required': 'El correo es requerido',
    }),

    usuario: Joi.string().min(2).max(20).required().messages({
        'string.min': 'El usuario debe tener al menos {#limit} caracteres',
        'string.max': 'El usuario debe tener máximo {#limit} caracteres',
        'any.required': 'El usuario es requerido',
    }),

    clave: Joi.string().min(4).max(20).required().messages({
        'string.min': 'La contraseña debe tener al menos {#limit} caracteres',
        'string.max': 'La contraseña debe tener máximo {#limit} caracteres',
        'any.required': 'La contraseña es requerida',
    }),
    
    rol: Joi.string()
})


export default registerSchema(schema)