

import { PrimaryButton } from "../components/Buttons"
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
      

    return (

        <>
        
       <form className='Formulario-buscador'action="#" method="GET">
        <input className='Input-buscador' type="text" name="1" placeholder="Buscar un libro" />
       <PrimaryButton>Buscar</PrimaryButton>
       </form>


        <h1>Últimas novedades</h1>

        <div className="Galeria-rental">
        {rentalData.map((libro,id) => (


            <CardRental key = {id} img= {libro.img} bookTitle={libro.bookTitle} userName={libro.userName} bookId={libro.bookId} userId={libro.userId}/>

        ))}
         </div>

        </>

        


    )


}


export default Buscador