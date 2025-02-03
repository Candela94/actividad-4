

import { PrimaryButton } from "../components/Buttons"
import { SecondaryButton } from "../components/Buttons"





const Registro = () => {

    return (

        <>
            <div className="Iniciar-sesion">
                <h1>Iniciar sesión</h1>

                <form action="" className="Formulario">




                    <input type="text" name="user" className="Formulario-input" placeholder="Nombre" />

                    <input type="text" name="user" className="Formulario-input" placeholder="Elige un nombre de usuario" />

                    <input type="password" name="user" className="Formulario-input" placeholder="Contraseña" />
                    <input type="password" name="user" className="Formulario-input" placeholder="Repite la contraseña" />

                        <h3>¿Qué géneros te gustaría encontrar en Books Nest?</h3>
                    <div className="Formulario-opciones">
                        <div className="Formulario-opcion1">
                            <label><input type="checkbox" name="genero[]" value="romance_historico" />Suspense </label>
                            <label><input type="checkbox" name="genero[]" value="romance_historico" />Ciencia Ficción </label>
                            <label><input type="checkbox" name="genero[]" value="romance_historico" />Policiaca </label>
                            <label><input type="checkbox" name="genero[]" value="romance_historico" />Romance histórico </label>
                        </div>


                        <div className="Formulario-opcion2">
                        <label><input type="checkbox" name="genero[]" value="romance_historico" />Mitología </label>
                        <label><input type="checkbox" name="genero[]" value="romance_historico" />Autobiografía </label>
                        <label><input type="checkbox" name="genero[]" value="romance_historico" /> Realismo mágico</label>
                        <label><input type="checkbox" name="genero[]" value="romance_historico" />Thriller </label>
                        </div>
                    </div>






                    <div className="Formulario-botones">
                        <SecondaryButton></SecondaryButton>
                        <PrimaryButton>Iniciar sesion</PrimaryButton>
                    </div>

                    <div className="Formulario-acceso">
                        <p className="Formulario-p">Regístrate con</p>
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


export default Registro