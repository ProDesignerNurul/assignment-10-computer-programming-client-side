import React from 'react';
import { useLoaderData } from 'react-router-dom';
import LanguageSummeryCard from '../LanguageSummeryCard/LanguageSummeryCard';

const Categories = () => {
    const language = useLoaderData();
    console.log(language)
    return (
        <div>
            <h2 className='text-center mb-4'>Our Special Courses Below</h2>
            <div>
                {
                    language.map(lang => <LanguageSummeryCard 
                    key={lang._id}
                    lang={lang}
                    ></LanguageSummeryCard>)
                }
            </div>
        </div>
    );
};

export default Categories;