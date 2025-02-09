
import { useEffect, useState } from "react"
import { Button } from "../components/Buttons"






const Registro = () => {


    const [userRegistro, setUserRegistro] = useState ({
        name:"",
        userName:"",
        password:""

    })

    const [passwordError, setPasswordError] = useState("")


    useEffect( () => {

        const {password} = userRegistro;


        if(password) {
            let hasUpperCase = false;
            let hasNumber = false;

            for (let i=0; i< password.length; i++) {
                const char = password[i];


                if (char >= "0" && char <="9") {

                    hasNumber=true;
                }

                if (char>= 'A' && char <= 'Z') {
                    hasUpperCase=true;
                }
            }


        
            if(!hasUpperCase || !hasNumber) {
                setPasswordError("La contraseña debe contener al menos una letra y un número"); 
                console.log(password)
            } else { setPasswordError("")}


        } else {
             setPasswordError("") 
        
        }
        
        
    


    }, [userRegistro.password]) //ejecutamos cuando cambia la contraseña


    const handleSubmit = (e) => {

        e.preventDefault();

        const {name, userName, password} = userRegistro;

        if(name === "" || userName==="" || password===""){

            alert('¡Completa los datos!')
            return;
        }




    }


    const handleChange = (e) => {

        setUserRegistro((prevState) => ({


            ...prevState,
            [e.target.name]: e.target.value



        }))

    }


    return (

        <>
            <div className="Iniciar-sesion">
                <h1>Iniciar sesión</h1>

                <form action="" className="Formulario">




                    <input type="text" name="name" onChange={handleChange} className="Formulario-input" placeholder="Nombre" />

                    <input type="text" name="userName"onChange={handleChange}  className="Formulario-input" placeholder="Elige un nombre de usuario" />

                    <input type="password" name="pass"onChange={handleChange}  className="Formulario-input" placeholder="Contraseña" />

                    {passwordError && <p style= {{color:'red'}} >{passwordError}</p>}
                    <input type="password" name="confirmPass"onChange={handleChange}  className="Formulario-input" placeholder="Repite la contraseña" />

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
                        <Button type="submit"  variant='secondary'>Ya soy usuario</Button>
                        <Button type="submit" onClick={handleSubmit} variant = 'primary'>Registrarme</Button>
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