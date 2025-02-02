

import { CardUsuario } from "./Card";



export const Galeria = () => {


    const LibrosUsuario = [
        { nombre: "El nombre del viento", img: '../src/imgs/nombre-viento.png' },
        { nombre: "Los juegos del hambre" , img: '../src/imgs/hambre.png'},
        { nombre: "Harry Potter y la piedra filosofal", img: '../src/imgs/harry.png' },
        { nombre: "Crónica de una muerte anunciada", img: '../src/imgs/cronica.png' },
        { nombre: "El hobbit" , img: '../src/imgs/hobbit.png'}
      
      ]
    return (

        <>
        
        {LibrosUsuario.map((libro,index) => (
            <CardUsuario key={index} img = {libro.img} nombre = {libro.nombre}  />
        ))}
        
        </>
    )
}