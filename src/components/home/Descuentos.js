import React, { Component } from 'react';
import descuentos from './styles/descuentos.css';
import jsonProduct from '../../database/product.json';

import Descuento from './Descuento';

function Descuentos() {
    
    return (
        <section>

            <div className="all">
                <h3 className="allTxt">Descuentos</h3>
            </div>
            <div className="list-discounts">
                <div className="discounts-divA">
                    <div className="discounts-divB">
                        {jsonProduct.map((prod, i) => 
                        <Descuento 
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

export default Descuentos;