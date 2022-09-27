import React from "react";
import { useState, useEffect } from "react";

const MiApi = () => {
    const [aves, setAves] = useState([]);
    useEffect(() => {obtenerAves();}, []);

    const obtenerAves = async () => {
        const url = 'https://aves.ninjas.cl/api/birds';
        const response = await fetch(url)
        const data = await response.json()
        setAves(data);   
    }

    const [avesBuscadas, setAvesBuscadas] = useState([])
    const busqueda = (e) => {
        setAvesBuscadas(e.target.value)
    }  
            
    return (
        <div>
            <div id="div-input">
                <label>Escribe el nombre del ave que buscas</label>
                <input 
                id="input-search"
                type="search"
                placeholder="Búsqueda"
                onChange={busqueda}/>
            </div>

            <h5 id="text-result">Resultado:</h5>
            <h6 id="text-options">Nombre en español - Nombre en latín - Nombre en inglés</h6>
            

            <ul id="list">
                {aves
                    .filter((ave) => {
                        return (
                            ave.name.spanish.toLowerCase().includes(avesBuscadas)
                        )}
                    )
                    .map(ave =>
                        <li key={ave.uid}>
                            {ave.name.spanish} / {ave.name.latin} / {ave.name.english}
                        </li>
                    )
                }
            </ul>               
        </div>
    )
}

export default MiApi;