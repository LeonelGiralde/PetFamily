import React, { useState, useEffect } from 'react';
import '../styles/Welcome.css';
import Boton from './Boton';

import dog1 from '../image/dog1.jpg';
import dog2 from '../image/dog2.jpg';
import dog3 from '../image/dog3.jpg';
import dog4 from '../image/dog4.jpg';

function Welcome() {
    const [currentImage, setCurrentImage] = useState(0);
    const images = [dog1, dog2, dog3, dog4];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage(prevImage => (prevImage + 1) % images.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='Welcome_contenedor'>
            <div className='sliding-images'>
                {images.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Dog ${index + 1}`}
                        className={index === currentImage ? 'visible' : ''}
                    />
                ))}
            </div>
            <div className='Welcome_contenido'>
                <h1>Welcome to Pet Family</h1>
                <p>Here you can find more information about us</p>
                <Boton />
            </div>
        </div>
    )
}

export default Welcome;