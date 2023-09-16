import { Link } from 'react-router-dom';

function Boton(){

    return(
        <div className="callContent">
            <Link to="/home"> {/* Utiliza el componente Link y establece la URL de destino */}
                <button type="button" className="btn btn-primary btn-lg">CLICK HERE</button>
            </Link>
        </div>
    )
}

export default Boton;