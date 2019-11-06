import React from 'react';
import filter from '../filter.css';

function Filter(props) {

    // const { } = props;
    //PARA TERMINOS REALES ESTE COMPONENTE HACE UNA CONSULTA A LA BASE DE DATOS

    return (
        <section className="filter-section">
            <h3 className="filter-name">Color</h3>
            <div className="color-section">
                <div className="color black"></div>
                <div className="color white"></div>
                <div className="color red"></div>
                <div className="color green"></div>
                <div className="color blue"></div>
            </div>
        </section>
    )
}

export default Filter;