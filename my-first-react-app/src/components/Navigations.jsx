import React from 'react';
import { NavLink } from 'react-router-dom';
//C’est un composant React Router utilisé pour créer des liens de navigation dans ton application
//Il te permet d’aller d’une page à une autre sans recharger la page, grâce au système de routing de React Router.


const Navigations = () => {
    return (
       <div className="navigation">
        <ul>
            <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" :  "")}>
                <li>accueil</li>
            </NavLink>
            
            <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")} >
                <li> à propos</li>
            </NavLink>
        </ul>
       </div>
    );
};

export default Navigations;