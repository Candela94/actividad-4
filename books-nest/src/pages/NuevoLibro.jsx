import { useEffect, useState } from "react"
import { Button } from "../components/Buttons"



export const NuevoLibro = () => {



 

    const [libro, setLibro] = useState("")
    const [autor, setAutor] = useState("")
    const [editorial, setEditorial] = useState("")
    const [frase, setFrase] = useState("")
    const [mensaje, setMensaje] = useState("")
    const [genero, setGenero] = useState("")

    const [mensajeExito, setMensajeExito] = useState("")

    

 




    const Chars = frase.length;





    const handleChange = (e) => {
        setFrase(e.target.value)
    }

    const [tiempoAlquiler, setTiempoAlquiler] = useState("");

    const handleAlquiler = (e) => {
        setTiempoAlquiler(e.target.value);
    };





    useEffect(() => {

        if(frase.length === 100) {
            setMensaje("No puedes escribir más de 100 caracteres")
        } else {
            setMensaje(`${frase.length} caracteres`)
        }


    }, [frase]) //Ejecutamos cada vez que cambia la frase


    const handleEnviar = (e) => {

        e.preventDefault();

        if(!libro || !autor || !editorial || !frase) {
            alert("Por favor, completa todos los campos")
            return;  
    } 

    setMensajeExito("¡Enhorabuena, has subido tu nuevo libro! :)")
    }

    return (

        <>


            <form action="" onSubmit={handleEnviar} className="Formulario-libro">
                <section className="Formulario-datosDescripcion">

                    <div className="Formulario-datos">
                        <input value={libro} className="Formulario-inputs" type="text" name="nameBook" placeholder="Nombre del libro" onChange={(e) => setLibro(e.target.value)} />


                        <input value={genero} className="Formulario-inputs" type="text" name="genBook" placeholder="Género" onChange={(e) => setGenero(e.target.value)} />

                        <input value={autor} className="Formulario-inputs" type="text" name="autor" placeholder="Autor" onChange={(e) => setAutor(e.target.value)} />

                        <input value={editorial} className="Formulario-inputs" type="text" name="editorial" placeholder="Editorial" onChange={(e) => setEditorial(e.target.value)} />


                        <select
                            className="Formulario-inputs"
                            name="tiempoAlquiler"
                            id="tiempoAlquiler"
                            value={tiempoAlquiler}
                            onChange={handleAlquiler}
                        >
                            <option value="" disabled>Tiempo máximo de alquiler</option>
                            <option value="5-7">de 5-7 días</option>
                            <option value="7-14">de 7-14 días</option>
                            <option value="30">Máximo un mes</option>
                        </select>
                    </div>


                    <div className="txt-area">
                        <textarea className="TextArea" name="descripcion"
                            value={frase}
                            onChange={handleChange}
                            cols='70'
                            rows='10'
                            maxLength='225'

                            placeholder="Breve descripción"></textarea>
                        <p className="TextArea-p"> {mensaje} </p>
                    </div>
                </section>

                <h4> ¿ Cómo prefieres que te contacten? </h4>

                <section className="Formulario-contacto">



                    <div className="Formulario-opciones">
                        <input type="radio" name="contacto" value='email' /> email
                        <input type="radio" name="contacto" value='email' /> Whatsapp
                        <input type="radio" name="contacto" value='email' /> A traves de Books Nest
                    </div>



                </section>
                <Button  type="submit "variant="primary" >Dar de alta mi nuevo libro</Button>
                {mensajeExito&& <p> {mensajeExito}</p>}
            </form>
        </>
    )

}