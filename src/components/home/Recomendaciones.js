import React, { Component } from 'react';
import recomendaciones from './styles/recomendaciones.css';
import jsonProduct from '../../database/product.json';

import Recomendacion from './Recomendacion';

function Recomendaciones() {
    
    return (
        <section>

            <div className="all">
                <h3 className="allTxt">Recomendaciones</h3>
            </div>
            <div className="list-recomendation">
                <div className="recomendation-divA">
                    <div className="recomendation-divB">
                        {jsonProduct.map((prod, i) => 
                        <Recomendacion 
                            nombre={prod.nombre} 
                            precio={prod.precio}
                            marca={prod.marca}
                            imagen={prod.imagen}
                            key={i}/>)}
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Recomendaciones;