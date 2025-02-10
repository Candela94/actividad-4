


import { Button } from "../components/Buttons"

import { GaleriaLanding } from "../components/Galeria"
import { CardLanding } from "../components/Card"



 const Landing = () => {


    return (
        <>

            <div className="Contenedor">

                <section className="Intro">
                    <div className="Intro-texto">
                        <h1 className="Intro-h1">Libros que viajan, historias que se comparten</h1>
                        <Button variant="primary">Regístrate en Book Nest</Button>

                    </div>
                    <img src="./public/imgs/portada.png" alt="portada" style={{ width: '400px' }} />
                </section>



                <section className="Seccion-2">
                    <h1 className="Seccion-2H1">¿Qué es Books Nest?</h1>
                    <div className="galeria">
                        <GaleriaLanding />

                    </div>
                </section>



                <section className="Seccion-3">
                    <h1 className="Seccion-3H1">Únete a la comunidad y empieza a descubrir nuevas historias</h1>

                    <div className="Seccion-3Botones">
                        <Button variant="secondary">Iniciar sesión</Button>
                        <Button variant="primary">Únete ahora</Button>

                    </div>
                </section>
            </div>


        </>
    )

}


export default Landing