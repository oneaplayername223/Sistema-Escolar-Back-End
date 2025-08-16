import Joi from "joi";

const addTeacherSchema = (schema) => (payload) =>
    schema.validate(payload, { abortEarly: false });


const schema = Joi.object({
    nombre: Joi.string().required(). min(2).messages({
        'string.min': 'El nombre debe tener al menos {#limit} caracteres',
        'any.required': 'El nombre es requerido',

    }),
    apellido: Joi.string().required().min(2).messages({
        'string.min': 'El apellido debe tener al menos {#limit} caracteres',
        'any.required': 'El apellido es requerido',
    }),
    fechaNacimiento: Joi.date().required().min('1900-01-01').messages({
        'date.min': 'La fecha de nacimiento debe ser mayor a 1900-01-01',
        'any.required': 'La fecha de nacimiento es requerida',
    }),
    celular: Joi.string().required().max(10).messages({
        'string.max' :"El número de celular debe tener máximo 10 dígitos",
    }),
    correo: Joi.string().required(). email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).messages({
        'string.email': 'El correo debe ser válido',
        'any.required': 'El correo es requerido',
    }),
    carnet: Joi.string().required().min(6).max(6).messages({
        'string.min': 'El carnet debe tener al menos {#limit} caracteres',
        'string.max': 'El carnet debe tener máximo {#limit} caracteres',
    }),
    id_cuenta: Joi.number(),

})

export default addTeacherSchema(schema);