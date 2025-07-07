import React from 'react';

const Card = ({country}) => {

    console.log(country);
    return (
        <li className="card">
         <img src={country.flags.svg} alt="" />
            <div className="infos">
               <h2>{country.name.common}</h2>
               <h4>{country.capital}</h4>
            </div>
            
        </li>
    );
};

export default Card;