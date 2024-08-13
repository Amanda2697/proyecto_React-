import './SeccionImag.css';

function SeccionImag( {imageSrc, text }) {
    return(
        <section id='top'>
            
            <img className="imagheroe"  src={imageSrc} alt="" />
            <div className="texto-superpuesto"> {text}</div>
        </section>
    )
}

export default SeccionImag