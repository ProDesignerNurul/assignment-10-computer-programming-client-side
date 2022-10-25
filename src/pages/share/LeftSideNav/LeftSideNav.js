import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {

    const [categories, setCategories] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/programming-categories')
        .then( res => res.json())
        .then( data => setCategories(data))
    } , [])

    return (
        <div>
            <h2>Programming Categories : {categories.length}</h2>
            <div>
                {
                    categories.map(category => <p key={category.id}>
                        <Link to={`/categories/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;