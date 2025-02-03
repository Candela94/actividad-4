


import { PrimaryButton } from "../components/Buttons"
import { SecondaryButton } from "../components/Buttons"
import { GaleriaLanding } from "../components/Galeria"
import { CardLanding } from "../components/Card"



 const Landing = () => {


    return (
        <>

            <div className="Contenedor">

                <section className="Intro">
                    <div className="Intro-texto">
                        <h1 className="Intro-h1">Libros que viajan, historias que se comparten</h1>
                        <PrimaryButton>Regístrate en Book Nest</PrimaryButton>

                    </div>
                    <img src="../src/imgs/portada.png" alt="portada" style={{ width: '30%' }} />
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
                        <SecondaryButton>Ya soy usuario</SecondaryButton>
                        <PrimaryButton>Únete ahora</PrimaryButton>

                    </div>
                </section>
            </div>


        </>
    )

}


export default Landing