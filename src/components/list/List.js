import React, { Component } from 'react';
import jsonProduct from '../../database/product.json';
import list from './styles/list.css';

import Product from './Product';
import FilterType from './FilterType';
import FilterSize from './FilterSize';
import FilterColor from './FilterColor';
import FilterPrice from './FilterPrice';
import Pages from './Pages';

function List() {

    return (
        <section className="list">
            <div className="list-A">
                <h3>
                    Categorias
                </h3>
            </div>
            <div className="list-B">
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

            </div>
            <Pages/>
        </section>
    )
    
}

export default List;