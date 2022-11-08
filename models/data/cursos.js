let cursos = [
    {
        nombre: "nodeJs",
        duracion: 200,
        alumno: ["636a8ca24c21da1a0dc0733d","636a8ca24c21da1a0dc0733c"]
    },
    {
        nombre: "React",
        duracion: 180,
        alumno: ["636a8ca24c21da1a0dc0733c","636a8ca24c21da1a0dc0733e","636a8ca24c21da1a0dc0733b"]
    },
    {
        nombre: "JavaScript",
        duracion: 200,
        alumno: ["636a8ca24c21da1a0dc0733e"]
    },
    {
        nombre: "Angular",
        duracion: 280,
        alumno: ["636a8ca24c21da1a0dc0733b"]
    }
]

require('dotenv').config()
require('../../config/database')
const Curso = require('../Curso')

cursos.forEach(elemento=> {
    Curso.create({
        nombre: elemento.nombre,
        duracion: elemento.duracion,
        alumno: elemento.alumno
    })
})