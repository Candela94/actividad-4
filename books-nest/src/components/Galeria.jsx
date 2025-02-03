

import { CardUsuario } from "./Card";
import { CardLanding } from "./Card";


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



export const GaleriaLanding = () => {

    const cardData =[

        {img: '../src/imgs/portada-1.png', descripcion: 'Pide prestado un libro a un usuario'},
        {img: '../src/imgs/portada-3.png', descripcion: 'Comparte tus libros con gente de distintos lugares'},
        {img: '../src/imgs/portada-2.png', descripcion: 'Disfruta de tu momento con un libro prestado por otra persona'}
        
        
        ];
        

    return(


        <>
        {cardData.map((item, indice) => (
            <CardLanding key={indice} img={item.img} descripcion = {item.descripcion}/>
        ))}
        
        </>

    )

}