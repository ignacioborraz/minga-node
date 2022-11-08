let users = [
    {
        "nombre": "Ignacio",
        "edad": 32,
        "nacimiento": new Date("07/09/1990"),
        "foto": "./img/sujeto1.png",
        "mail": "ignacioborraz@hotmail.com",
        "comidas": ["lasaña","hamburguesa"],
        "hobbies": ["leer manga","bailar"]
    },
    {
        "nombre": "Eric",
        "edad": 23,
        "nacimiento": new Date("01/13/1999"),
        "foto": "./img/sujeto2.png",
        "mail": "feric.rodriguez@gmail.com",
        "comidas": ["milanesa","ñoquis"],
        "hobbies": ["mirar series","jugar al poker"]
    },
    {
        "nombre": "Ale",
        "edad": 0,
        "nacimiento": new Date("12/25/1980"),
        "foto": "./img/sujeto3.png",
        "mail": "alejandro@zvi.com",
        "comidas": ["lomito","atun","pure"],
        "hobbies": ["enseñar"]
    },
    {
        "nombre": "Mindy",
        "edad": 0,
        "nacimiento": new Date("03/01/2022"),
        "foto": "./img/sujeto4.png",
        "mail": "notengo@mail.com",
        "comidas": ["tomate","frutilla","palomas"],
        "hobbies": ["hurgar","romper"]
    }
]

require('dotenv').config()
require('../../config/database')
const User = require('../User')

users.forEach(elemento=> {
    User.create({
        nombre: elemento.nombre,
        edad: elemento.edad,
        nacimiento: elemento.nacimiento,
        foto: elemento.foto,
        mail: elemento.mail,
        comidas: elemento.comidas,
        hobbies: elemento.hobbies
    })
})