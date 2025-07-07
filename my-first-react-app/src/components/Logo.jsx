import React from 'react';

const Logo = () => {
    return (
        <div className="logo">
            {/*Les images  importées depuis la balise IMG sont accessible dans "public"*/}
            <img src="./logo.png" alt="logo react" />
            <h3>React world</h3>
        </div>
    );
};

export default Logo;