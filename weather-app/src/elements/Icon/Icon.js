import React from 'react';

const icon = (props) => {
    return(
        <img
            src={require(`../../assets/images${props.type}.svg`)}
            alt={props.type}
            className={classes.Icon} />
    );
}

export default icon;