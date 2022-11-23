let usuarios = [
    {
        "nombre": "Ignacio",
        "edad": 32,
        "nacimiento": new Date("07/09/1990"),
        "foto": "./img/sujeto1.png",
        "mail": "ignacioborraz@hotmail.com",
        "comidas": ["636d5775c67698ccc47127da","636d5775c67698ccc47127df","636d5775c67698ccc47127db"],
        "hobbies": ["leer manga","bailar"],
        "disponible": false        
    },
    {
        "nombre": "Eric",
        "edad": 23,
        "nacimiento": new Date("01/13/1999"),
        "foto": "./img/sujeto2.png",
        "mail": "feric.rodriguez@gmail.com",
        "comidas": ["636d5775c67698ccc47127df","636d5775c67698ccc47127db"],
        "hobbies": ["mirar series","jugar al poker"],
        "disponible": false        
    },
    {
        "nombre": "Ale",
        "edad": 36,
        "nacimiento": new Date("12/25/1980"),
        "foto": "./img/sujeto3.png",
        "mail": "alejandro@zvi.com",
        "comidas": ["636d5775c67698ccc47127dd","636d5775c67698ccc47127de","636d5775c67698ccc47127df"],
        "hobbies": ["enseñar"],
        "disponible": false        
    },
    {
        "nombre": "Mindy",
        "edad": 1,
        "nacimiento": new Date("03/01/2022"),
        "foto": "./img/sujeto4.png",
        "mail": "notengo@mail.com",
        "comidas": ["636d5775c67698ccc47127de","636d5775c67698ccc47127dc"],
        "hobbies": ["hurgar","romper"],
        "disponible": false        
    },{
        "nombre": "Gabriela",
        "edad": 20,
        "nacimiento": new Date("11/11/2002"),
        "foto": "https://aishlatino.com/wp-content/uploads/2021/11/que-tipo-de-persona-te-gustaria-ser-730x411-SP.jpg",
        "mail": "gabriela@mail.com",
        "hobbies": ["codear","jugar"],
        "comidas": [],
        "disponible": false
    },{    
        "nombre": "Lucas",
        "edad": 19,
        "nacimiento": "2003-11-11T00:00:00.000Z",
        "foto": "https://los40.com/los40/imagenes/2022/04/13/bigbang/1649847016_940843_1649847228_gigante_normal.jpg",
        "mail": "lucas@mail.com",
        "hobbies": ["codear","jugar"],
        "comidas": ["636d5775c67698ccc47127d9"],
        "disponible": false
    }
]

require('dotenv').config()
require('../../config/database')
const Usuario = require('../Usuario')

Usuario.insertMany(usuarios,(error, docs)=>{})