import database from "./database.js";
export const adminInfoService = () => {
    try {
        return new Promise((resolve, reject) =>{
            const query = 'SELECT * FROM profesores;';
            database.query(query, (err, res) =>{
               if (res){resolve(res)}
               else{reject(err)}
            })
        })
        
    } catch (error) {
        return console.log('servicios:', error)
        
    }
}


export const agregarProfesorService = (nombre, apellido, fechaNacimiento, celular, correo, carnet) => {
    try {
        return new Promise((resolve, reject) =>{
            const query = 'INSERT INTO profesores (`nombre`, `apellido`, `fecha-nacimiento`, `celular`, `correo`, `carnet`) VALUES (?, ?, ?, ?, ?, ?)';
            database.query(query, [nombre, apellido, fechaNacimiento, celular, correo, carnet], (err, res) =>{
                if(res){resolve(res)}
                else{reject(err)}
            })
        })
        
    } catch (error) {
        return console.log('servicios:')
        
    }
}

export const agregarestudianteService = (nombre, apellido, fechaNacimiento, celular, correo, encrypt, id_cuenta, carnet) => {
    try {
        return new Promise((resolve, reject) => {
        const query = 'INSERT INTO estudiantes (`nombre`, `apellido`, `fecha-nacimiento`, `celular`, `correo`, `carnet`, `id_cuenta`) VALUES (?, ?, ?, ?, ?, ? , ?)';
        const query2 = 'INSERT INTO usuarios (`nombre`, `usuario`, `clave`, `rol`) VALUES (?, ?, ?, "estudiante")';

        //query 1
        database.query(query, [nombre, apellido, fechaNacimiento, celular, correo, carnet, id_cuenta], (err, res) =>{
            if(res){resolve(res)}
            else{reject(err)}
        })
        //query 2
            database.query(query2, [nombre, correo, encrypt], (err, res) =>{
            if(res){resolve(res)}
            else{reject(err)}
        })

})
        
    } catch (error) {
       return console.log(error)
        
    }
}

export const eliminarProfesorService = (id) => {
    try {
        return new Promise((resolve, reject) =>{
            const query = 'DELETE FROM profesores WHERE id = ?';
            database.query(query, [id], (err, res) =>{
                if(res){resolve(res)}
                else{
                    reject(err)
                }
            })
        })
        
    } catch (error) {
        return console.log('Servicios:', error)
        
    }
}