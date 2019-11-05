import React, { Component } from 'react';
// import icon from '../assets/icon.svg';
// import dataCategory from '../category.json';
import list from './list.css';

import Product from './Product';

function List() {
    
    return (
        <section className="list">

            <div className="list-filter">
                Filtro
            </div>
            <div className="list-product">
                <Product/>
                <Product/>
                <Product/>
                <Product/>

                <Product/>
                <Product/>
                <Product/>
                <Product/>
                
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                {/* {dataCategory.map((book, i) => <Category name={book.category} key={i} icon={icon}/>)} */}
            </div>

        </section>
    )
    
}

export default List;