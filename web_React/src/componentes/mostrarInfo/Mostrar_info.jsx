import './Mostrar_info.css'
import { useState } from "react";

function Mostrar_info() {
   
    const [mostrarInformacion, setMostrarInformacion] = useState(false);
    const handleClicEnBotonInformacion = () => {
        setMostrarInformacion(!mostrarInformacion);
    }

    return (
        <section className='container-mostrar'>
            <h3>Click aquí..</h3>

            <button className='btn-dato' onClick={handleClicEnBotonInformacion}>
                {mostrarInformacion ? 'Ocultar información' : 'Dato Curioso'}
            </button>
            {mostrarInformacion && (
                <div className='mostrar-informacion'>
                    <p>Suiza tiene una extensa red de bunkers y refugios subterráneos.</p>
                </div>
            )}
        </section>
    )
}

export default Mostrar_info; 