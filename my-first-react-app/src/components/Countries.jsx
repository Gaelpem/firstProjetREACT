import React, { useEffect, useState } from 'react';
import axios from "axios"; 
import Card from './Card';

// Import des hooks React et de la bibliothèque Axios
const Countries = () => {
    // État qui stocke la liste des pays récupérés depuis l'API
    const [data, setData] = useState([]);
    
    // État qui stocke la valeur actuelle du slider (nombre de pays affichés)
    const [rangeValue, setRangeValue] = useState(36);
    
    // État qui stocke le continent sélectionné dans le radio (ex : "Asia")
    const [selectedRadio, setSelectedRadio] = useState("");
    
    // Tableau contenant les continents proposés pour le filtre radio
    const radio = ["Africa", "America", "Asia", "Europe", "Oceania"];

    // useEffect qui se lance au chargement du composant (tableau de dépendance vide [])
    useEffect(() => {
        // Envoie une requête GET à l'API RestCountries pour récupérer les pays avec nom, drapeau, capitale et région
        axios.get("https://restcountries.com/v3.1/all?fields=name,flags,capital,region")
            .then((res) => setData(res.data)); // On stocke les données dans l'état 'data'
    }, []);

    return (
        <div className="countries">
            
            {/* Zone de filtres */}
            <ul className="radio-container">

                {/* Slider pour choisir combien de pays afficher */}
                <input
                    type="range"
                    min="1"
                    max="250"
                    defaultValue={rangeValue}
                    onChange={(e) => setRangeValue(e.target.value)} // Met à jour 'rangeValue' selon le slider
                />

                {/* Liste des boutons radio pour filtrer par continent */}
                {radio.map((continent) => (
                    <li key={continent}>
                        <input

                            type="radio"
                            id={continent}
                            name="continentRadio"
                             // Vérifie si le continent de ce bouton radio correspond à celui actuellement sélectionné,
                            // si oui le bouton est affiché comme "coché", sinon il reste décoché
                            checked={continent === selectedRadio}
                            onChange={(e) => setSelectedRadio(e.target.id)} // Met à jour le continent sélectionné
                        />
                        <label htmlFor={continent}>{continent}</label>
                    </li>
                ))}
            </ul>

            {/* Bouton pour annuler le filtre et réinitialiser 'selectedRadio' */}
            {selectedRadio && (
                <button onClick={() => setSelectedRadio("")}>
                    Annuler la recherche
                </button>
            )}

            {/* Liste des pays affichés */}
            <ul>
                {data
                    // Filtre les pays selon le continent sélectionné (si aucun continent sélectionné, tout est affiché car .includes("") est toujours vrai)
                    .filter((country) => country.region.includes(selectedRadio))
                    // Limite le nombre de pays affichés selon la valeur du slider
                    .slice(0, rangeValue)
                    // Map pour afficher chaque pays via le composant <Card />
                    .map((country, index) => (
                        <Card key={index} country={country} />
                    ))}
            </ul>
        </div>
    );
};

export default Countries;
