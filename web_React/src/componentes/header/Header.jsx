

import './Header.css';
import React, { useState } from 'react';

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    return (
        <header  className='header'>
            <div class="logo">
           <p>Suiza</p>
            </div>

            {/* Botón de menú hamburguesa */}
            <button className="menu-btn" onClick={toggleMenu}>
                <i className={isMenuOpen ? "fa-solid fa-times" : "fa-solid fa-bars"}></i>
            </button>


            <nav className= {`nav-lg ${isMenuOpen ? 'nav-open' : ''}`}>
                <a href="#">Inicio</a>
                <a href="#">Destinos</a>
                <a href="#">Atracciones</a>
            </nav>


            <div className="container_buscar">
                <form action="buscar">
                    <input className="input_buscador" type="search" placeholder="Buscar.." />
                    <button type="submit">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </form>
            </div>


            <div className="btn__sesion">
                <form action="">
                    <button className="sesion-btn" type="submit">
                        <i className="fa-solid fa-circle-user"></i>
                    </button>
                </form>
            </div>
        </header>
    );
};

export default Header;
