
import { useEffect, useState } from "react";
import { Button } from "../components/Buttons"
import { CardRental } from "../components/Card"






const Buscador = () => {



    const [searchTerm, setSearchTerm] = useState("");
    const [books, setBooks] = useState([]); //Array de libros de archivo.json
    const [filteredBooks, setFilteredBooks] = useState([]); //libros filtrados
    const [error,setError] = useState("")


  

    useEffect(() => {
     

        fetch('/public/backend/libros.json')
        .then(response => response.json())
        .then(datos => {
            setBooks(datos); //asigmanos datos de libros a books
            setFilteredBooks(datos); //iniciamos los libros filtrados con todos los libros
        })
        .catch(error => setError("¡Vaya! libro no encontrado :("))
    }, []) //se ejecuta una vez al montar el componente 





    //filtro de búsqueda
    const handleSearch = (e) => {

        const term = e.target.value.toLowerCase()
        setSearchTerm(term);


        const filtered = books.filter((book) =>
            book.titulo.toLowerCase().includes(term)); //comparamos el nombre del libro con el término de búsqueda
        setFilteredBooks(filtered)






    }


    return (

        <>

            <form className='Formulario-buscador' action="#" method="GET">
                <input className='Input-buscador'
                    type="text" name="1"
                    placeholder="Buscar un libro"
                    value={searchTerm}
                    onChange={handleSearch} />
             
                {error && <p>{error}</p>}
            </form>


     
            <div className="Galeria-rental">

                {filteredBooks.map((book, id) => (


                    <CardRental 
                        img={book.imagen}
                        bookTitle={book.titulo} />


                ))}
            </div>

        </>




    )


}


export default Buscador