import React from 'react';
import filter from './styles/filter.css';

function Filter(props) {

    // const { } = props;
    //PARA TERMINOS REALES ESTE COMPONENTE HACE UNA CONSULTA A LA BASE DE DATOS

    return (
        <section className="filter-section">
            <h3 className="filter-name">Talla</h3>
            <div className="size-section">
                <div className="size">XS</div>
                <div className="size">S</div>
                <div className="size">M</div>
                <div className="size">L</div>
                <div className="size">XL</div>
            </div>
        </section>
    )
}

export default Filter;