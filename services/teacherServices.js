import database from "./database.js";



export const getIdCuentaService = (id_profesor) => {
    try {
        return new Promise((resolve, reject) => {
            const query = 'SELECT id_cuenta FROM profesores WHERE id = ?';
            database.query(query, [id_profesor], (err, res) => {
                if (res) {
                    resolve(res)
                } else {
                    reject(err)
                }
            })
        })
    } catch (error) {
        return console.log('Servicios:', error)
        
    }
}

export const postTeacherHomeworkService = (nombre, descripcion, id_profesor) => {
    try {
        return new Promise((resolve, reject) => {
            const query = 'INSERT INTO tareas (nombre, descripcion, id_profesor) VALUES (?, ?, ?)';
            database.query(query, [nombre, descripcion, id_profesor], (err, res) => {
                if (res) {
                    resolve(res)
                } else {
                    reject(err)
                }
            })
        })
    } catch (error) {
        return console.log('Servicios:', error)
        
    }
}

