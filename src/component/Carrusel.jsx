import can from '../image/th.jpg'
import can2 from '../image/image.jpg'
import can3 from '../image/image2.jpg'

function Carrusel() {
    return (

        <div>
            <div id="carouselExampleFade" className="carousel slide carousel-fade">
                <div className="carousel-inner">

                    <div className="carousel-item active">
                        <img alt="#" src={can} className="d-block w-100" />
                    </div>

                    <div className="carousel-item">
                        <img alt="#" src={can2} className="d-block w-100" />
                    </div>

                    <div className="carousel-item">
                        <img alt="#" src={can3} className="d-block w-100" />
                    </div>

                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Carrusel;