import { Link } from "react-router-dom"
import './Menu.css'

const Menu = () => {
    return (<div className="container-menuS1" >
        <nav className="menuS1">
            <ul>
                <li>
                    <Link to="/">Actividades</Link>
                </li>
                <li>
                    <Link to="/cultura">Cultura</Link>
                </li>
                <li>
                    <Link to="/arquitectura">Arquitectura</Link>
                </li>
                <li>
                    <Link to="/deporte">Deporte</Link>
                </li>
            </ul>
        </nav>

    </div>
    )
}

export default Menu;