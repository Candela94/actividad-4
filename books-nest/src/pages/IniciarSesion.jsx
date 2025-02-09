import { useState } from "react";
import { Button } from "../components/Buttons"


 const IniciarSesion = () => {

    const [formData, setFormData] = useState({

        user:'',
        password:''
        
    })


    const handleEnviar = (event) => {


    
        event.preventDefault(); //evitamos enviar el formulario
        console.log("enviando")

        const {user, password} = formData;

        if(user.trim() === "" && password.trim()==="") {
            alert("Completa los datos!")
            return;
        }



    }



const handleChange = (e) => {


    setFormData((prevState) => ({



        ...prevState, //necesitamos saber el estado previo
        [e.target.name] : e.target.value

    }))

}








    return (

        <>
            <div className="Iniciar-sesion">
                <h1>Iniciar sesión</h1>

                <form action="" className="Formulario">



                    <div className="Formulario-password">
                    <input type="text" onChange={handleChange}name="user" className="Formulario-input" placeholder="Nombre de usuario"  value={formData.user}/>

                        <input type="password"onChange={handleChange} className="Formulario-input" value={formData.password} />
                        <p className="Formulario-contrasena"> ¿Has olvidado tu contraseña?</p>
                    </div>


                    <div className="Formulario-botones">
                        <Button onClick= {handleEnviar}variant = 'secondary'>Regístrate</Button>
                        <Button onClick= {handleEnviar}variant = 'primary'>Iniciar sesion</Button>
                    </div>

                    <div className="Formulario-acceso">
                        <p className="Formulario-p">Accede con</p>
                        <div className="Formulario-iconos">
                            <img src="./imgs/google-icon.png" alt="google" className="Formulario-icon" />
                            <img src=".imgs/facebook-icon.png" alt="facebook" className="Formulario-icon" />
                        </div>
                    </div>


                   

                

                </form>


            </div>

        </>



    )




}

export default IniciarSesion
