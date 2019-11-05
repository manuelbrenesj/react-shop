import React from 'react';
import hero from './hero.css';
import image from '../assets/hero.jpg'

function Hero() {
    return (
        <section className="heroFather">

            <div className="heroMsj">
                <h1 className="hero-Txt">Temporada de jackets y chaquetas</h1>
            </div>

            <div className="heroButton">
                <div className="heroButton-A">
                    <h3>Descuentos</h3>
                </div>
                <div className="heroButton-B">
                    <h3>Recomendaciones</h3>
                </div>
            </div>

        </section>
    )
}

export default Hero;