import React from 'react';

const tempNames = ['Sunny', 'Vette'];

function Listing (props) {
    const listElements = tempNames.map((name, index) => {
        return (<li key={index}>{name}</li>)
    });

    return (
        <ul>{listElements}</ul>
    );
}

export default Listing;