import Botoncard from '../botoncard/Botoncard';
import './SeccionMas.css'

function SeccionMas() {
    return(
        <div className='btn-mostrar-mas'>
            <p>Seguir explorando esta sección..</p>
            <Botoncard colortexto= "white"  texto="Mostrar Más" />
        </div>
    )
}

export default SeccionMas;