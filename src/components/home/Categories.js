import React, { Component } from 'react';
import icon from '../../assets/icon.svg';
import dataCategory from '../../database/category.json';
import categories from './styles/categories.css';

import Category from './Category';

function Categories() {
    
    return (
        <section>

            <div className="all">
                <h3 className="allTxt">Categorias</h3>
            </div>
            <div className="categories">
                <div className="categories-divA">
                    <div className="categories-divB">
                    {dataCategory.map((book, i) => <Category name={book.category} key={i} icon={icon}/>)}
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Categories;