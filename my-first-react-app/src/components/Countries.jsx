import React, { use, useEffect, useState } from 'react';
import axios from "axios"; 
import Card from './Card';

const Countries = () => {
    const [data, setData] = useState([]);
    const [rangeValue, setRangeValue] = useState(36)
    const [selectedRadio, setSelectedRadio] = useState("")
    const radio = ["Africa", "America","Asia","Europe","Oceania"]
    useEffect(()=>{
        //Envoie une requête pour récupérer la liste des pays depuis l'API, puis affiche ces données dans la console lorsque la réponse arrive.
        axios.get("https://restcountries.com/v3.1/all?fields=name,flags,capital,region").then((res) => setData(res.data))
    },[])
    return (

        <div className="countries">
            <ul className="radio-container">
                <input type="range" 
                min="1" max="250" 
                defaultValue={rangeValue} 
                onChange={(e) =>setRangeValue(e.target.value)}/>
                {radio.map((continent =>(
                    <li>
                         <input type="radio" 
                         id={continent} 
                         name="continentRadio"
                         onChange={(e)=> setSelectedRadio(e.target.id)}/>
                       <label htmlFor={continent}>{continent}</label>
                    </li>
                )))}
            </ul>
           {selectedRadio && <button onClick={()=> setSelectedRadio("")}>Annuler la recherche</button>}


            <ul>
            {data.filter((country)=>country.region.includes(selectedRadio))
            .slice(0, rangeValue).map((country, index) => (
    <Card key={index} country={country} />
))}
            </ul>
            
          
        </div>
    );
};

export default Countries;