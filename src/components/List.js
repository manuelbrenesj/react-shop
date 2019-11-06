import React, { Component } from 'react';
// import ropa1 from '../assets/ropa1.jpg';
import jsonProduct from '../product.json';
import list from './list.css';

import Product from './Product';
import Filter from './Filter';

function List() {

    return (
        <section className="list">

            <div className="list-filter">
                <Filter/>
            </div>
            <div className="list-product">
                {jsonProduct.map((prod, i) => 
                <Product 
                nombre={prod.nombre} 
                precio={prod.precio}
                marca={prod.marca}
                imagen={prod.imagen}
                key={i}/>)}
            </div>

        </section>
    )
    
}

export default List;