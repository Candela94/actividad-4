



export const Card = ({nombre, precio, genero, img}) => {


    const {src, alt} = img;

    return (
        <>
        
        <div className="Card">
            <img src={src} alt={alt} className="Card-img" style={{width:'100px'}} />
            <div className="Card-info">
                <h4 className="Card-nombre">{nombre}</h4>
                <p className="Card-genero">{genero}</p>
                <p className="Card-precio">{precio}</p>
            </div>
        </div>
        
        </>




    )


}



export const CardUsuario = ({nombre,img}) => {


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



