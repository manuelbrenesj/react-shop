import React from 'react';
import recomendacion from './styles/recomendacion.css';

function Category(props) {

    const { nombre, precio, marca, imagen } = props;

    return (
        <section className="recomendation">
            <img className="recomendation-img" src={imagen}></img>
            <h3 className="recomendation-name">{nombre}</h3>
            <h3 className="recomendation-price">Precio ${precio}</h3>
            <h3 className="recomendation-brand">{marca}</h3>
            <button className="recomendation-btn">Agregar al carrito</button>
        </section>
    )
}

export default Category;