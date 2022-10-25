import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './DisplayDetails.css';

const DisplayDetails = ({ lang }) => {
    console.log(lang)
    const {_id, name, details } = lang;
    return (
        <div className='display-details'>
            <div>
                <h2>{name}</h2>
                <p>{details}</p>
                <Button variant="success"><Link to={`/programming/${_id}`}>Learn More Info...</Link></Button>
            </div>
        </div>
    );
};

export default DisplayDetails;