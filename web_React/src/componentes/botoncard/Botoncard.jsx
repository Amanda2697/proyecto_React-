
import './Botoncard.css'

function Botoncard(props) {
    const estiloBoton = {
        backgroundColor: props.color,
        color: props.colortexto,
    }
    return (
        <div>
            <button style={estiloBoton}  className='btn_seccionboton'>
            {props.texto}
            </button>
        </div>
    )
}

export default Botoncard; 