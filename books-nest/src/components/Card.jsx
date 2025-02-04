import { PrimaryButton } from "./Buttons";




export const Card = ({ nombre, precio, genero, img }) => {


    const { src, alt } = img;

    return (
        <>

            <div className="Card">
                <img src={src} alt={alt} className="Card-img" style={{ width: '100px' }} />
                <div className="Card-info">
                    <h4 className="Card-nombre">{nombre}</h4>
                    <p className="Card-genero">{genero}</p>
                    <p className="Card-precio">{precio}</p>
                </div>
            </div>

        </>




    )


}



export const CardUsuario = ({ nombre, img }) => {


    return (

        <>

            <div className="Card" >
                <div className="Card-imagen">
                    <img src={img} alt="portada" className="Card-img" />
                </div>
                <div className="titulo">
                    <h4>{nombre}</h4>
                </div>

            </div>



        </>


    )
}



export const CardLanding = ({ descripcion, img }) => {


    return (
        <>

            <div className="Card-landing">
                <div className="Card-image">
                    <img className="Card-img" src={img} alt="image" />
                </div>
                <p className="Card-descripcion">{descripcion}</p>
            </div>


        </>
    )

}



export const CardRental = ({ img, userName, bookTitle, }) => {

    return (
        <>

            <div className="CardRental">
                <div className="imagen">
                    
                <img className='Rental-img' src={img} alt="portada" />
                </div>

                <div className="Rental-libro">
                    <h3 className="LibroH4">{bookTitle}</h3>
                
                </div>

                

                <PrimaryButton>Añadir libro</PrimaryButton>
            </div>
        </>
    )
}