import React, { useState } from 'react';
import './DarkLightMode.css';

const DarkLightMode = () => {
    const [darkMode, setDarkMode] = useState(false);
    return (
        <div className={ darkMode ? 'dark-mode' : 'light-mode'}>
            <div className="constainer">

                {/* <span style={{color: 'yellow'}}>*</span> */}

                <div className="switch-checkbox">
                <label className='switch'>
                <input type="checkbox" title='dark, light' onChange={ () => setDarkMode(!darkMode)} />
                <span className='slider round'></span>
                </label>
                </div>

                {/* <span style={{color: 'gray'}}>🌙</span> */}

            </div>
        </div>
    );
};

export default DarkLightMode;