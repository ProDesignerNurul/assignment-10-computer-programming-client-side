import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './LeftSideNav.css';

const LeftSideNav = () => {

    const [categories, setCategories] = useState([]);

    useEffect( () => {
        fetch('https://computer-programming-server.vercel.app/programming-categories')
        .then( res => res.json())
        .then( data => setCategories(data))
    } , [])

    return (
        <div>
            <h2 className='mb-4'>Categories :</h2>
            <div className='language-category'>
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