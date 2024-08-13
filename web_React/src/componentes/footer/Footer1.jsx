import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp} from '@fortawesome/free-solid-svg-icons';
import './Footer1.css'

function Footer1() {
    return (


        <section className='footer-1'>

            <div class="footer-container">
                <div class="contacto">
                    <p>Teléfono (011)4429-9602</p>
                    <p>info@suizaviajes.com.ar</p>
                </div>

                <div>
                    <a class="iconos-redes" href="https://www.instagram.com" target="_blank">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                    <a class="iconos-redes" href="https://www.facebook.com" target="_blank">
                        <i class="fa-brands fa-facebook"></i>
                    </a>
                    <a class="iconos-redes" href="https://www.youtube.com" target="_blank">
                        <i class="fa-brands fa-youtube"></i>
                    </a>
                </div>

                <div class="derechos">
                    <p>@todos los derechos reservados</p>
                </div>

            </div>

            <div className='btn-flecha'>
                <a href="#top">

                <FontAwesomeIcon icon={faArrowUp} style={{ color: 'white' }} />
                </a>
          
            </div>

           
           
        </section>

    )
}

export default Footer1;