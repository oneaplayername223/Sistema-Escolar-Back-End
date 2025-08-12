import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser';

//routes

import loginRoutes from './routes/loginRoutes.js'
import adminRoutes from './routes/adminRoutes.js'

const app = express()

//middlewares
app.use(cors())
app.use(express.json())
app.use(cookieParser());
const port = 5000

//routes

app.use(loginRoutes)
app.use(adminRoutes)


//port config
app.listen(port)
console.log('servidor iniciado en puerto:',port)