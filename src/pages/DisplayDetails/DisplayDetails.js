import React from 'react';

const DisplayDetails = ({lang}) => {
    console.log(lang)
    const {name, image_url} = lang;
    return (
        <div>
            <h2>{name}</h2>
            <img src={image_url} alt="" />
        </div>
    );
};

export default DisplayDetails;