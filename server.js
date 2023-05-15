import 'dotenv/config.js'
import express from 'express'

const server = express()
const PORT = process.env.PORT || 8080
const ready = ()=>console.log('server running on port '+PORT)

server.listen(PORT,ready)