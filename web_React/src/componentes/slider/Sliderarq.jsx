import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Sliderarq.css'

import Imagen1 from '../../assets/imagenes/imgArq1.jpg'
import Imagen2 from '../../assets/imagenes/imagArq2.jpg'
import Imagen3 from '../../assets/imagenes/imgArq3.jpeg'
import Imagen4 from '../../assets/imagenes/imgArq4.webp'
import Imagen5 from '../../assets/imagenes/imgArq5.jpg'
import Imagen6 from '../../assets/imagenes/imgArq6.jpg'
import Imagen7 from '../../assets/imagenes/imgArq7.jpg'

function Sliderarq() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
         <img src={Imagen1} alt="Imagen 1" className="slider-image" />
        </div>
        <div>
         <img src={Imagen2} alt="Imagen 2" className="slider-image" />
        </div>
        <div>
         <img src={Imagen3} alt="Imagen 3" className="slider-image" />
        </div>
        <div>
          <img src={Imagen4} alt="Imagen 4" className="slider-image"/>
        </div>
        <div>
          <img src={Imagen5} alt="Imagen 5" className="slider-image" />
        </div>
        <div>
        <img src={Imagen6} alt="Imagen 6" className="slider-image" />
        </div>
        <div>
        <img src={Imagen7} alt="Imagen 7" className="slider-image" />
        </div>
        
      </Slider>
    </div>
  );
}

export default Sliderarq;



