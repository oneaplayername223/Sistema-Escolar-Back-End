import { error } from 'console'
import mysql, { createConnection } from 'mysql'



const database = createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'estudiantes-react'
})

database.connect((err, res) =>{
   if(err){
    return console.log('Error de Conexion')
   }
   else{
    return console.log('Base de Datos conectada exitosamente')
   }
})

export default database