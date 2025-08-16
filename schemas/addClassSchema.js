import Joi from "joi";


const addClassSchema = (schema) => (payload) =>
    schema.validate(payload, { abortEarly: false });

const schema = Joi.object({
    nombre: Joi.string().required(). min(3).messages({
        'string.min': 'El nombre debe tener al menos {#limit} caracteres',
        'any.required': 'El nombre es requerido',
    }),
    descripcion: Joi.string().required(). min(2).messages({
        'string.min': 'La descripción debe tener al menos {#limit} caracteres',
        'any.required': 'La descripción es requerida',
    }),

})


export default addClassSchema(schema)