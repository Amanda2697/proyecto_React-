import CardReutilizable from '../cardReutilizable/CardReutilizable'
import './CardContainer.css'
import Recorrido from '../../assets/imagenes/recorridotren.jpg'
import SenderismoInvernal from '../../assets/imagenes/senderismoinvernal.jpg'
import Teleferico from '../../assets/imagenes/teleferico.jpg'




function CardContainer() {
    return ( 
        <section>
            <h2 className='titulo-invernal'>Ofertas Invernales</h2>
            <div className="cards_container">
           
            <CardReutilizable 
                titulo= "El Glacier Express"
                imagenUrl={Recorrido}
                body= "El expreso más lento del mundo recorre en 8 horas la cordillera de los Alpes atravesando 91 túneles."
            />

            <CardReutilizable 
                titulo= "Senderismo Invernal"
                imagenUrl={SenderismoInvernal}
                body= "El norte de la principal cordillera alpina ofrece las mejores condiciones para unas excursiones invernales."
            />

            <CardReutilizable 
            titulo= "Paseos en teleférico"
            imagenUrl={Teleferico}
            body= "Disfruta de un recorrido espectacular que te llevará hasta la estación teleférica más alta de Europa."

            />            
        </div>
        </section>
        
    )
}

export default CardContainer; 

