import Card1 from "../card/Card1";
import Esqui from '../../assets/imagenes/esquiCard1.jpg'
import './Seccion_card.css'
import Senderismo from '../../assets/imagenes/senderismoCard2.jpg'
import Kayak from '../../assets/imagenes/kayakCard3.jpg'
import Pesca from '../../assets/imagenes/pescaCard4.jpg'

function Seccion_card() {
    return (

        <section className="container-seccion-card">

            <div className="seccion-card-row">
                <Card1
                    tittle="Esquí"
                    imageUrl={Esqui}

                />
            </div>

            <div className="seccion-card-row">

                <Card1
                    tittle="Trekking"
                    imageUrl={Senderismo} />
            </div>

            <div className="seccion-card-row">
                <Card1
                    tittle="Kayak"
                    imageUrl={Kayak}
                />

            </div>

            <div className="seccion-card-row">

                <Card1
                    tittle="Pesca"
                    imageUrl={Pesca}
                />

            </div>

        </section>


    )
}

export default Seccion_card;