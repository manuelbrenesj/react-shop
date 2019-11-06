import React, { Component } from 'react';
// import ropa1 from '../assets/ropa1.jpg';
import jsonProduct from '../database/product.json';
import list from './list.css';

import Product from './Product';
import FilterType from './filter/FilterType';
import FilterSize from './filter/FilterSize';
import FilterColor from './filter/FilterColor';
import FilterPrice from './filter/FilterPrice';

function List() {

    return (
        <section className="list">

            <div className="list-filter">
                <FilterType/>
                <FilterColor/>
                <FilterSize/>
                <FilterPrice/>
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