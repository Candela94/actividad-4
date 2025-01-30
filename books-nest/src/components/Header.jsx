

import '../css/styless.css'

export const Header = () => {

    return(

        <>
        
        <header className="Header">
            <h4 className="Header-logo">Logo</h4>
            <nav className="Header-nav">
                <ul className="Header-ul">
                    <li className="Header-li"><a href="#">Buscar libros</a></li>
                    <li className="Header-li"><a href="#">Prestar libros</a></li>
                    <li className="Header-li"><a href="#">Perfil</a></li>

                </ul>
            </nav>
        </header>
        
        </>
    )


}