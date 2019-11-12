import React from 'react';
import descuento from './styles/descuento.css';

function Descuento(props) {

    const { nombre, precio, marca, imagen } = props;

    return (
        <section className="discount">
            <img className="discount-img" src={imagen}></img>
            <h3 className="discount-name">{nombre}</h3>
            <h3 className="discount-price">Precio ${precio}</h3>
            <h3 className="discount-brand">{marca}</h3>
            <button className="discount-btn">Agregar al carrito</button>
        </section>
    )
}

export default Descuento;