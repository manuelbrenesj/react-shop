import React from 'react';
import ropa1 from '../assets/ropa1.jpg';
import product from './product.css';

function Product(props) {

    const { nombre, precio, marca, imagen } = props;

    return (
        <section className="product">
            <img className="product-img" src={imagen}></img>
            <h3 className="product-name">{nombre}</h3>
            <h3 className="product-price">Precio ${precio}</h3>
            <h3 className="product-brand">{marca}</h3>
            <button className="product-btn">Agregar al carrito</button>
        </section>
    )
}

export default Product;




