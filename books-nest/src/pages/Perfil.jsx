import { Button } from "../components/Buttons";
import { CardUsuario } from "../components/Card";
import { Galeria } from "../components/Galeria";



const Perfil = ({ nombre, img, prestados, alquilados, valoraciones, usuario }) => {
  

    // const { nombre, apellidos, img, prestados, alquilados, valoraciones, usuario } = userData;
    console.log(img)


    return (

        <>
            <div className="contenedor">

                <div className="Datos">
                    <img src={img} alt="avatar" className="Datos-img" style={{ width: '200px', borderRadius: '8px' }} />


                    <div className="Informacion">

                        <div className="Datos-informacion">
                            <h2 className="Datos-nombre">{nombre}</h2>
                            <p className="Datos-usuario">🙆‍♂️{usuario}</p>
                            <p className="Datos-libros">Libros prestados {prestados}</p>
                            <p className="Datos-libros">Libros alquilados {alquilados}</p>
                            <div className="Estrellas">{valoraciones}</div>
                        </div>

                        <Button variant="secondary">Dar de alta un nuevo libro +</Button>
                    </div>

                </div>


                <div className="Galeria-libros">
                    <div className="Opciones">
                        <p className="opcion1">Mi cuenta</p>
                        <p className="opcion2">Mis libros</p>

                    </div>



                    <div className="Galeria">
                        <Galeria />
                    </div>

                </div>



            </div>


        </>
    )


}


export default Perfil