import React from 'react';
import Button from 'react-bootstrap/Button';
import './DisplayDetails.css';

const DisplayDetails = ({ lang }) => {
    console.log(lang)
    const { name, details } = lang;
    return (
        <div className='display-details'>
            <div>
                <h2>{name}</h2>
                <p>{details}</p>
                <Button variant="success">Learn More Info...</Button>
            </div>
        </div>
    );
};

export default DisplayDetails;