import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Categories = () => {
    const language = useLoaderData();
    return (
        <div>
            <h2>This Is CategoryWise Language : {language.length}</h2>
        </div>
    );
};

export default Categories;