import React, { Component } from 'react';

import Hero from './Hero';
import Categories from './Categories';
import Recomendaciones from './Recomendaciones'
import Descuentos from './Descuentos'
// import List from './List';
// import Pages from './Pages';

function Home() {
    
    return (
        <section>
            <Hero/>
            <Categories/>
            <Recomendaciones/>
            <Descuentos/>
        </section>
    )
}

export default Home;