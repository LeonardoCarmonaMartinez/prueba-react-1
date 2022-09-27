import React from "react";
import MiApi from "./componentes/MiApi";


function App() {
  return (
    <div>
      <div id="landing">
        <h1 id="title">Nombre de las aves</h1>
      </div>
      <section>
        <p id="description">"Las aves son animales vertebrados, ovíparos, de respiración pulmonar y sangre de temperatura constante, pico córneo, cuerpo cubierto de plumas, con dos patas y dos alas aptas por lo común para el vuelo."</p>
        <p id="desc-source">Fuente: © Real Academia Española</p>
        <hr/>
        <MiApi />
      </section>                   
    </div>
  )
  
}

export default App;
