let usuarios = [
    {
        "nombre": "Ignacio",
        "edad": 32,
        "nacimiento": new Date("07/09/1990"),
        "foto": "./img/sujeto1.png",
        "mail": "ignacioborraz@hotmail.com",
        "comidas": ["636d5775c67698ccc47127da","636d5775c67698ccc47127df","636d5775c67698ccc47127db"],
        "hobbies": ["leer manga","bailar"]
    },
    {
        "nombre": "Eric",
        "edad": 23,
        "nacimiento": new Date("01/13/1999"),
        "foto": "./img/sujeto2.png",
        "mail": "feric.rodriguez@gmail.com",
        "comidas": ["636d5775c67698ccc47127df","636d5775c67698ccc47127db"],
        "hobbies": ["mirar series","jugar al poker"]
    },
    {
        "nombre": "Ale",
        "edad": 36,
        "nacimiento": new Date("12/25/1980"),
        "foto": "./img/sujeto3.png",
        "mail": "alejandro@zvi.com",
        "comidas": ["636d5775c67698ccc47127dd","636d5775c67698ccc47127de","636d5775c67698ccc47127df"],
        "hobbies": ["enseñar"]
    },
    {
        "nombre": "Mindy",
        "edad": 1,
        "nacimiento": new Date("03/01/2022"),
        "foto": "./img/sujeto4.png",
        "mail": "notengo@mail.com",
        "comidas": ["636d5775c67698ccc47127de","636d5775c67698ccc47127dc"],
        "hobbies": ["hurgar","romper"]
    }
]

require('dotenv').config()
require('../../config/database')
const Usuario = require('../Usuario')

Usuario.insertMany(usuarios,(error, docs)=>{})