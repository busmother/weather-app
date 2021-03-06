import React from 'react';

import classes from './Preview.module.css';

const preview = (props) => {
    return(
        <img
            src={requestAnimationFrame('../../assets/images/Preview.svg')}
            alt="Weather App Icon"
            className={classes.Preview} />
    );
}

export default preview;