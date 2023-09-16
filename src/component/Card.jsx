import '../styles/Card.css'
import can2 from '../image/image.jpg'

function Card() {
    return (
        <div class="card">
            <img alt="#" src={can2} className="card-img-top" />
            <div class="card-body">
                <p class="card-text">Aca va la informacion del rescate</p>
            </div>
        </div>
    )
}

export default Card;