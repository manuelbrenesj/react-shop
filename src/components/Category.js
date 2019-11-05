import React from 'react';
import category from './category.css';

function Category(props) {

    const { name, icon } = props;

    return (
        <section className="category">
            <img className="icon" src={icon}></img>
            <p className="name">{name}</p>
        </section>
    )
}

export default Category;