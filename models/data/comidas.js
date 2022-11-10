let comidas = [
    {
        nombre: "milanesa",
        receta: "googlear la comida para saber como se hacer",
        ingredientes: ["636d3e3132e663fb3f8a2016","636d3e3132e663fb3f8a201a","636d3e3132e663fb3f8a201e"]
    },{
        nombre: "marinera",
        receta: "googlear la comida para saber como se hacer",
        ingredientes: ["636d3e3132e663fb3f8a2016","636d3e3132e663fb3f8a201a","636d3e3132e663fb3f8a201b"]
    },{
        nombre: "ñoquis",
        receta: "googlear la comida para saber como se hacer",
        ingredientes: ["636d3e3132e663fb3f8a201b","636d3e3132e663fb3f8a2019","636d3e3132e663fb3f8a2018"]
    },{
        nombre: "fideos",
        receta: "googlear la comida para saber como se hacer",
        ingredientes: ["636d3e3132e663fb3f8a201b","636d3e3132e663fb3f8a2019"]
    },{
        nombre: "ensalada",
        receta: "googlear la comida para saber como se hacer",
        ingredientes: ["636d3e3132e663fb3f8a2019","636d3e3132e663fb3f8a201a","636d3e3132e663fb3f8a2018","636d3e3132e663fb3f8a201d"]
    },{
        nombre: "sushi",
        receta: "googlear la comida para saber como se hacer",
        ingredientes: ["636d3e3132e663fb3f8a2017","636d3e3132e663fb3f8a2019","636d3e3132e663fb3f8a201d"]
    },{
        nombre: "hamburguesa",
        receta: "googlear la comida para saber como se hacer",
        ingredientes: ["636d3e3132e663fb3f8a201e","636d3e3132e663fb3f8a201d","636d3e3132e663fb3f8a2016"]
    }
]

require('dotenv').config()
require('../../config/database')

const Comida = require('../Comida')
Comida.insertMany(comidas,(error, docs)=>{})