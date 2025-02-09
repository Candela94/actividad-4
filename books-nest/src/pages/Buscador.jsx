
import { useEffect, useState } from "react";
import { Button } from "../components/Buttons"
import { CardRental } from "../components/Card"


const Buscador = () => {


        const rentalData = [

            {   
                img:'../src/imgs/anillos.png',
                id: 1,
                userId: 101,
                userName: "Juan Pérez",
                bookId: 201,
                bookTitle: "El señor de los anillos"
            },
            {   
                img:'../src/imgs/misery.png',
                id: 2,
                userId: 102,
                userName: "María García",
                bookId: 202,
                bookTitle: "Misery"
            },
            {   
                img:'../src/imgs/patti.png',
                id: 3,
                userId: 103,
                userName: "Carlos López",
                bookId: 203,
                bookTitle: "Just kids"
            },
            {   
                img:'../src/imgs/ansia.png',
                id: 4,
                userId: 104,
                userName: "Ana Martínez",
                bookId: 204,
                bookTitle: "Ansia"
            },
            {   
                img:'../src/imgs/bowie.png',
                id: 5,
                userId: 105,
                userName: "Luisa Fernández",
                bookId: 205,
                bookTitle: "Bowie"
            }
          ];



    const [searchTerm, setSearchTerm] = useState("");
    const [books, setBooks] = useState(rentalData); //Array de libros de API
    const [filteredBooks, setFiltered] = useState(rentalData); //libros filtrados



   


    //filtro de búsqueda
    const handleSearch = (e) => {

        const term = e.target.value.toLowerCase()
        setSearchTerm(term);


        const filteredBooks = books.filter((book) =>
            book.bookTitle.toLowerCase().includes(term));
        setFiltered(filteredBooks)



     


    }


    return (

        <>

            <form className='Formulario-buscador' action="#" method="GET">
                <input className='Input-buscador' 
                type="text" name="1" 
                placeholder="Buscar un libro" 
                value={searchTerm}
                onChange={handleSearch}/>
                <Button variant="primary">Buscar</Button>
            </form>


            <h1>Últimas novedades</h1>

            <div className="Galeria-rental">

                {filteredBooks.map((book, id) => (


                    <CardRental key={book.bookId}
                    img={book.img} 
                    bookTitle={book.bookTitle} />
                    
                    
                ))}
            </div>

        </>




    )


}


export default Buscador