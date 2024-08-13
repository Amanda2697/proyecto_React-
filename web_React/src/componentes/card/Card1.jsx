
import './Card1.css';


function Card1({ tittle, imageUrl, body }) {
    return (
        <div className='card1-container'>
            <div className='image1-container'>
                <img src={imageUrl} alt="" />
            </div>
           <div>
           <p className='titulodeCard'> {tittle} </p>
           </div>

        </div>
    )
}

export default Card1;


