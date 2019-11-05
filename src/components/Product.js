import React from 'react';
import product from './product.css';

function Product() {

    // const { image, name, price, brand } = props;

    return (
        <section className="product">
            <img className="product-img"></img>
            <h3 className="product-name">Sueter Nike</h3>
            <h3 className="product-price">Precio: $25</h3>
            {/* <h3 className="product-brand">Nike</h3> */}
            <button className="product-btn">Agregar al carrito</button>
        </section>
    )
}

export default Product;