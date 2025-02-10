import { Button } from "../components/Buttons";
import { CardUsuario } from "../components/Card";
import { Galeria } from "../components/Galeria";
import { useNavigate, useState } from 'react';



const Perfil = ({ nombre, img, prestados, alquilados, valoraciones, usuario }) => {


    const [sectionActive, setSectionActive] = useState("miCuenta")

    const handleSectionChange = (section) => {
        setSectionActive(section)
    };



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

                        <Button variant="secondary" >Dar de alta un nuevo libro +</Button>
                    </div>

                </div>


                <div className="Galeria-libros">
                    <div className="Opciones">

                        <div
                            onClick={() => handleSectionChange("misLibros")}
                            style={sectionActive === 'misLibros' ? { fontWeight: "bold",  cursor:'pointer' } : {}}
                            className="opcion1">Mis libros
                        </div>




                        <div
                            onClick={() => handleSectionChange("miCuenta")}
                            style={sectionActive === 'miCuenta' ? { fontWeight: "bold" , cursor:'pointer' } : {}}
                            className="opcion2">Mi cuenta
                        </div>



                    </div>


                    {sectionActive === 'miCuenta' && (
                        <div className="Cuenta-contenido">
                            <h3>Mi cuenta</h3>

                            <ul className="Cuenta-ul">
                                <li>Configuración de la cuenta</li>
                                <li>Editar perfil</li>
                                <li>Método de pago</li>
                                <li>Mis libros alquilados</li>
                                <li>Acerca de Books Nest</li>
                            </ul>

                        </div>

                    )}


                    {sectionActive === 'misLibros' && (
                        <div className="Galeria">
                            <Galeria />
                        </div>

                    )}
                </div>
                </div>
                
</>
        


            )


}


export default Perfil