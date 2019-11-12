import React from 'react';
import filter from './styles/filter.css';

function Filter(props) {

    // const { } = props;
    //PARA TERMINOS REALES ESTE COMPONENTE HACE UNA CONSULTA A LA BASE DE DATOS

    return (
        <section className="filter-section">
            <h3 className="filter-name">Genero</h3>
            <h3 className="filter-option">Hombre</h3>
            <h3 className="filter-option">Mujer</h3>
        </section>
    )
}

export default Filter;