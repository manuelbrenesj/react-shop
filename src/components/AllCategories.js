import React, { Component } from 'react';
import icon from '../assets/icon.svg';
import dataCategory from '../database/category.json';
import allCategories from './allCategories.css';

import Category from './Category';

function AllCategories() {
    
    return (
        <section>

            <div className="all">
                <h3 className="allTxt">Categorias</h3>
            </div>
            <div className="categories">
                {dataCategory.map((book, i) => <Category name={book.category} key={i} icon={icon}/>)}
            </div>

        </section>
    )
    
}

export default AllCategories;