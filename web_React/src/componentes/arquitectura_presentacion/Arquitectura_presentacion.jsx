import './Arquitectura_presentacion.css'
import ImagArquitectura from '../../assets/imagenes/fortaleza.jpg'

function Arquitectura_presentacion() {
    return(
        <section className="container-arquiPresentacion">
            <img src={ImagArquitectura} alt="Fortaleza" />
            <div className='container-textoA'>
                <p className='titulo-imgarq'>Equilibrio entre Naturaleza y Tradición</p>
                <p className='texto-imgarq'>
                Suiza, pese a su tamaño, esconde ejemplos de <b>arquitectura excelentes</b> y se ha destacado en este ámbito durante siglos. 
                La arquitectura en Suiza es una mezcla de tradición y modernidad, fuertemente influenciada por su paisaje montañoso y su diversidad cultural. 
                Suiza es conocida por integrar edificios armoniosamente en el entorno natural, utilizando materiales locales como piedra y madera. La arquitectura 
                moderna en el país ha sido marcada por figuras como Le Corbusier. Te presentamos algunas de las más destacadas en su historia.
                </p>
            </div>
        </section>
    )
}

export default Arquitectura_presentacion;