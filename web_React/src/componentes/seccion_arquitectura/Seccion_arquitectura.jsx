
import Menu from '../menu/Menu';
import SeccionImag from '../seccionImag/SeccionImag';
import ArquitecturaImag from '../../assets/imagenes/arquitecturaimg.jpg'
import Arquitectura_presentacion from '../arquitectura_presentacion/Arquitectura_presentacion';
import Sliderarq from '../slider/Sliderarq';
import Mostrar_info from '../mostrarInfo/Mostrar_info';




function Seccion_arquitectura() {
    return (
        <>
            <SeccionImag imageSrc={ArquitecturaImag} text="Arquitectura" />
            <Menu />
            <Arquitectura_presentacion />
           <Sliderarq />
           <Mostrar_info />
        </>
    )
}

export default Seccion_arquitectura; 