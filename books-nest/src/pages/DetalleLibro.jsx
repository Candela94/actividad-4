


const DetalleLibro = () => {


const libro = {

    nombre:"Cien años de soledad",
    autor:"Gabriel García Márquez",
    genero: "Realismo mágico",
    estado:"Como nuevo",
    disponibilidad: true,
    editorial: "",
    

    descripcion:"Cien años de soledad se centra en la familia Buendía de Riohacha y la maldición que llevan con ellos, por involucrarse entre parientes. Tal es el caso de José Arcadio Buendía y Úrsula Iguarán, quienes son primos y viven con el temor de engendrar un hijo con cola de cerdo. ",
    estado:"Nuevo",
    img:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.buscalibre.es%2Flibro-cien-anos-de-soledad%2F9789588886213%2Fp%2F46863379&psig=AOvVaw0OihD0D1GLr92xJtEH4GEe&ust=1739265578180000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIiygq7juIsDFQAAAAAdAAAAABAE",


}



const {nombre, autor, genero, estado, disponibilidad, descripcion, img} = libro;


return(

    <>
 
    <section className="Introduccion"> 
        <img  src= {img} alt="Libro" className="Introduccion-imagen" />

        <div className="Introduccion-datos">
            <h1 className="Nombre"> {nombre}</h1>
            <p className="Decripcion">{descripcion}</p>
        </div>
    </section>


    <section className="Detalles">
        <h2>Más detalles sobre el libro</h2>
        <p>Autor : {autor}</p>
        <p>Género: {genero}</p>
        <p>Estado: {estado}</p>

    </section>

    
    </>
)



}



export default DetalleLibro;