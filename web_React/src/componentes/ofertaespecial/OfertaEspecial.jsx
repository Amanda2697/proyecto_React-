
import { useEffect, useState } from 'react';
import './OfertaEspecial.css';

function OfertaEspecial() {
    const [mensaje, setMensaje] = useState('¡Aprovecha nuestra oferta especial de invierno!');
    const [visible, setVisible] = useState(true); 

    useEffect(() => {
        const temporizadorCambio = setTimeout(() => {
            setMensaje('Reserva ahora y obtén un 10% de descuento adicional.');
        }, 5000); 

        const temporizadorDesaparicion = setTimeout(() => {
            setVisible(false); 
        }, 10000); 

        return () => {
            clearTimeout(temporizadorCambio);
            clearTimeout(temporizadorDesaparicion); 
        };
    }, []);

    if (!visible) return null; 

    return (
        <div className="oferta-especial">
            <h2>{mensaje}</h2>
        </div>
    );
}

export default OfertaEspecial;

