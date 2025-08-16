import Joi from "joi";


const postTeacherHomeworkSchema = (schema) => (payload) =>
    schema.validate(payload, { abortEarly: false });


const schema = Joi.object({

    nombre: Joi.string().required().min(2).max(30).messages({
        'string.min' : 'El nombre debe tener al menos {#limit} caracteres',
        'string.max' : 'El nombre debe tener máximo {#limit} caracteres',
        'any.required' : 'El nombre es requerido',
    
    }),

    descripcion: Joi.string().required().min(4).max(100).messages({
        'string.min' : 'La descripción debe tener al menos {#limit} caracteres',
        'string.max' : 'La descripción debe tener máximo {#limit} caracteres',
        'any.required' : 'La descripción es requerida',
    }),

})


export default postTeacherHomeworkSchema(schema);