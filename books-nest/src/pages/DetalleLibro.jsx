import { useEffect, useState } from "react";



const DetalleLibro = () => {


    const[libro, setLibro] = useState("")

useEffect(() => {

    fetch('public/backend/libros.json')
    .then(response => response.json())
    .then(data=> {
        setLibro(data)
    })



})


return(

    <>
 
    <section className="Introduccion"> 
        <img  src= {img} alt="Libro" className="Introduccion-imagen" />

        <div className="Introduccion-datos">
            <h1 className="Nombre"> </h1>
            <p className="Decripcion"></p>
        </div>
    </section>


    <section className="Detalles">
        <h2>Más detalles sobre el libro</h2>
        <p>Autor :</p>
        <p>Género: </p>
        <p>Estado: </p>

    </section>

    
    </>
)



}



export default DetalleLibro;