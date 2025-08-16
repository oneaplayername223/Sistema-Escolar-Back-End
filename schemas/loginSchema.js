import Joi from "joi";


const validate = (schema) => (payload) =>
    schema.validate(payload, { abortEarly: false});


const schema = Joi.object({
    usuario: Joi.string().required().min(2).max(20).messages({
        'string.min': 'El usuario debe tener al menos {#limit} caracteres',
        'string.max': 'El usuario debe tener máximo {#limit} caracteres',
        'any.required': 'El usuario es requerido',
    }),

    clave: Joi.string().required().min(3).max(20).messages({
        'string.min': 'La contraseña debe tener al menos {#limit} caracteres',
        'string.max': 'La contraseña debe tener máximo {#limit} caracteres',
        'any.required': 'La contraseña es requerida',
    })


})

export default validate(schema)