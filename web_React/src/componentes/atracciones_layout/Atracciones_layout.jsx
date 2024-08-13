import SeccionImag from "../seccionImag/SeccionImag";
import OfertaEspecial from "../ofertaespecial/OfertaEspecial";
import Presentacion from "../presentacion/Presentacion";
import Seccion_card from "../seccion_card/Seccion_card";
import SeccionMas from "../seccionmas/SeccionMas";
import CardContainer from "../cardContainer/CardContainer";
import Menu from "../menu/Menu";
import kayac from '../../assets/imagenes/kayac.jpg'

function Atracciones_layout() {
    return (
        <>
            <SeccionImag imageSrc={kayac} text="Actividades"/>
            <Menu />
            <OfertaEspecial />
            <Presentacion />
            <Seccion_card />
            <SeccionMas />
            <CardContainer />
        </>
    )
}


export default Atracciones_layout;