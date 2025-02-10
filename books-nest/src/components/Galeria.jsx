

import { CardUsuario } from "./Card";
import { CardLanding } from "./Card";


export const Galeria = () => {


    const LibrosUsuario = [
        { nombre: "El nombre del viento", img: './public/imgs/nombre-viento.png' },
        { nombre: "Los juegos del hambre" , img: './public/imgs/hambre.png'},
        { nombre: "Harry Potter y la piedra filosofal", img: './public/imgs/harry.png' },
        { nombre: "Crónica de una muerte anunciada", img: './public/imgs/cronica.png' },
        { nombre: "El hobbit" , img: './public/imgs/hobbit.png'}
      
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

        {img: './public/imgs/portada-1.png', descripcion: 'Pide prestado un libro a un usuario'},
        {img: './public/imgs/portada-3.png', descripcion: 'Comparte tus libros con gente de distintos lugares'},
        {img: './public/imgs/portada-2.png', descripcion: 'Disfruta de tu momento con un libro prestado por otra persona'}
        
        
        ];
        

    return(


        <>
        {cardData.map((item, indice) => (
            <CardLanding key={indice} img={item.img} descripcion = {item.descripcion}/>
        ))}
        
        </>

    )

}