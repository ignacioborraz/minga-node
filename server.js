import express from 'express'
import 'dotenv/config.js'
import './config/database.js'

const server = express()
const PORT = process.env.PORT || 8080
const ready = ()=>console.log('server running on port '+PORT)

//middlewares
server.use(express.json())                              //permite entradas y también trabajar con formato json
server.use(express.urlencoded({ extended: false }))     //permite capturar consultas complejas

server.listen(PORT,ready)