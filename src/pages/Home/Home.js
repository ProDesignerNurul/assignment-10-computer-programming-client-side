import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DisplayDetails from '../DisplayDetails/DisplayDetails';

const Home = () => {

    const language = useLoaderData();
    console.log(language)

    return (
        <div>
            <h2>this is home : {language.length}</h2>
            <div>
                {
                    language.map( lang => <DisplayDetails
                    key={lang.id}
                    lang={lang}
                    ></DisplayDetails>)
                }
            </div>
        </div>
    );
};

export default Home;