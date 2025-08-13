import database from "./database.js";


export const postTeacherHomeworkService = (nombre, descripcion, id_profesor, id_cuenta) => {
    try {
        return new Promise((resolve, reject) => {
            const query = 'INSERT INTO tareas (nombre, descripcion, id_profesor, id_cuenta) VALUES (?, ?, ?, ?)';
            database.query(query, [nombre, descripcion, id_profesor, id_cuenta], (err, res) => {
                if (res) {
                   return resolve(res)
                } else {
                   return reject(err)
                }
            })
        })
    } catch (error) {
        return res.status(400).console.log('ha habido un error')
        
    }
}

