let ingredientes = [
    {
        nombre: "carne",
        foto: 'https://w7.pngwing.com/pngs/944/831/png-transparent-fork-and-knife-icon-computer-icons-meal-lunch-meal-miscellaneous-logo-silhouette-thumbnail.png'
    },
    {
        nombre: "pescado",
        foto: 'https://w7.pngwing.com/pngs/944/831/png-transparent-fork-and-knife-icon-computer-icons-meal-lunch-meal-miscellaneous-logo-silhouette-thumbnail.png'
    },
    {
        nombre: "papa",
        foto: 'https://w7.pngwing.com/pngs/944/831/png-transparent-fork-and-knife-icon-computer-icons-meal-lunch-meal-miscellaneous-logo-silhouette-thumbnail.png'
    },
    {
        nombre: "tomate",
        foto: 'https://w7.pngwing.com/pngs/944/831/png-transparent-fork-and-knife-icon-computer-icons-meal-lunch-meal-miscellaneous-logo-silhouette-thumbnail.png'
    },
    {
        nombre: "huevo",
        foto: 'https://w7.pngwing.com/pngs/944/831/png-transparent-fork-and-knife-icon-computer-icons-meal-lunch-meal-miscellaneous-logo-silhouette-thumbnail.png'
    },
    {
        nombre: "harina",
        foto: 'https://w7.pngwing.com/pngs/944/831/png-transparent-fork-and-knife-icon-computer-icons-meal-lunch-meal-miscellaneous-logo-silhouette-thumbnail.png'
    },
    {
        nombre: "espinaca",
        foto: 'https://w7.pngwing.com/pngs/944/831/png-transparent-fork-and-knife-icon-computer-icons-meal-lunch-meal-miscellaneous-logo-silhouette-thumbnail.png'
    },
    {
        nombre: "queso",
        foto: 'https://w7.pngwing.com/pngs/944/831/png-transparent-fork-and-knife-icon-computer-icons-meal-lunch-meal-miscellaneous-logo-silhouette-thumbnail.png'
    },
    {
        nombre: "pan",
        foto: 'https://w7.pngwing.com/pngs/944/831/png-transparent-fork-and-knife-icon-computer-icons-meal-lunch-meal-miscellaneous-logo-silhouette-thumbnail.png'
    }
]

require('dotenv').config()
require('../../config/database')

const Ingrediente = require('../Ingrediente')
Ingrediente.insertMany(ingredientes,(error, docs)=>{})