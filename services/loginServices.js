import { resolve } from 'path'
import database from './database.js'
import { rejects } from 'assert'

export const registerService = (nombre, usuario, encrypt ) =>{
    try {
        return new Promise((resolve, rejects) =>{
            const query = 'INSERT INTO usuarios (nombre, usuario, clave, rol) VALUES (?, ?, ?, "admin")';
            database.query(query, [nombre, usuario, encrypt], (err, res) =>{
                if (err){rejects(err)}
                else
                {resolve(res)}
            })
        })
        
    } catch (error) {
        return res.status(400).console.log('ha habido un error')
        
    }
}

export const loginService = (usuario) =>{
    try {
return new Promise((resolve, rejects) =>{
    const query = 'SELECT * FROM usuarios WHERE usuario = ?';
    database.query(query, [usuario], (err, res) =>{
        if(res){resolve(res)}
        else{rejects(err)}
    })
})
        
    } catch (error) {
        return console.log('ha habido un error:', error)
        
    }
}