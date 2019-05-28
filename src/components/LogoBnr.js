import React from 'react';

const vcenter = { alignItems: 'center' }

function LogoBnr(props) {
    return (
        <div className="row logo-bnr" style={vcenter}>
            <div className="col-6 logo ">
                <a href="http://google.com"><img src="https://via.placeholder.com/150"></img></a>
            </div>
            <div className="col-6 banner">
                <img src="https://via.placeholder.com/300X250"></img>
            </div>
        </div>
    );
}

export default LogoBnr; 
