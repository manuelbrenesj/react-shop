import React from 'react';
import filter from './styles/filter.css';

function Filter(props) {

    // const { } = props;
    //PARA TERMINOS REALES ESTE COMPONENTE HACE UNA CONSULTA A LA BASE DE DATOS

    return (
        <section className="filter-section">
            <h3 className="filter-name">Precio</h3>
            <div className="price-section">
                <input className="price-min" placeholder=" Min"></input>
                <p>-</p>
                <input className="price-max" placeholder=" Max"></input>
            </div>

            <button className="filter-btn">
                Buscar
            </button>
        </section>
    )
}

export default Filter;