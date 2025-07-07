import React from 'react';
import Navigations from '../components/Navigations';
import Logo from '../components/Logo';
import Countries  from '../components/Countries';

const Home = () => {
    return (

        <div>
           <Logo/>
           
            <Navigations/>
             <Countries/>
        </div>
    );
};

export default Home;