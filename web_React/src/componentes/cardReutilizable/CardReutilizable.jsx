import React, { useState } from 'react';
import './CardReutilizable.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Botoncard from '../botoncard/Botoncard';

function CardReutilizable({ titulo, imagenUrl, body}) {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleLikeClick = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <div className="Container-cardReutilizable">
            <img src={imagenUrl} alt="" />
            <div className="heart-icon" onClick={handleLikeClick}>
                <FontAwesomeIcon icon={faHeart} />
            </div>

            <div className="card-contenido">
                <h3 className='card-titulo'> {titulo} </h3>
                <p className='card-body'> {body} </p>
               
            </div>
            <div className="btn-card" >
            <Botoncard  color="#5e0b42" colortexto= "white"  texto="Leer Más" />
            </div>

            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Disculpa</h2>
                        <p>Necesitas iniciar sesión para agregarlo o añadirlo a tus favoritos.</p>
                        <button type='button'> Iniciar Sesión</button>
                        <button onClick={closeModal}>Cerrar</button>
                    </div>
                </div>
            )}

        </div>
    );
}

export default CardReutilizable;