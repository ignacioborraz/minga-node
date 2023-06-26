import express from 'express'
import 'dotenv/config.js'
import './config/database.js'
import indexRouter from './router/index.js'
import cors from 'cors'
import morgan from 'morgan'
//import time from './middlewares/time.js'
import not_found_handler from './middlewares/not_found_handler.js'
import error_handler from './middlewares/error_handler.js'

const server = express()
const PORT = process.env.PORT || 8080
const ready = ()=>console.log('server running on port '+PORT)

//middlewares
server.use(express.json())                              //permite entradas y también trabajar con formato json
server.use(express.urlencoded({ extended:true }))       //permite capturar consultas complejas
server.use(cors())                                      //para permitir orígenes cruzados (front/back)
server.use(morgan('dev'))                               //para registrar peticiones HTTP
//server.use(time)

//router
server.use('/api',indexRouter)
server.use(not_found_handler)
server.use(error_handler)

server.listen(PORT,ready)