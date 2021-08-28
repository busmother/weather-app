import React from 'react;'

import classes from './Footer.module.css';
import Logo from '../../elements/Logo/Logo'

const footer = () => {
    return(
        <footer className={classes.Footer}>
            <Logo colorScheme='dark' clicked={props.onClickHandler} />
            <div classname={classes.Separator}></div>
        </footer>
    );
}

export default footer;