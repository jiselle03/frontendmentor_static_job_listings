import React from 'react';

const CompanyLogo = ({ logo }) => {

    return(
        <div 
            className="logo"
            style={{
                backgroundImage: `url(${require("../assets/" + logo + ".svg")})`,
                height: "100px",
                width: "100px",
                backgroundPosition: "left top",
                backgroundRepeat: "no-repeat",
            }}
        >
        </div>
    );
};

export default CompanyLogo;
