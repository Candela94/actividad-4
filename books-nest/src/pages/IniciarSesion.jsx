import { PrimaryButton } from "../components/Buttons"
import { SecondaryButton } from "../components/Buttons"

 const IniciarSesion = () => {

    return (

        <>
            <div className="Iniciar-sesion">
                <h1>Iniciar sesión</h1>

                <form action="" className="Formulario">



                    <div className="Formulario-password">
                    <input type="text" name="user" className="Formulario-input" placeholder="Nombre de usuario" />

                        <input type="password" className="Formulario-input" />
                        <p className="Formulario-contrasena"> ¿Has olvidado tu contraseña?</p>
                    </div>


                    <div className="Formulario-botones">
                        <SecondaryButton></SecondaryButton>
                        <PrimaryButton>Iniciar sesion</PrimaryButton>
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
