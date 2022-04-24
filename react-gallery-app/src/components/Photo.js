import React from 'react';

const Photo = (props) => {
    const sizeSuffix = 'w'
    const url = `https://live.staticflickr.com/${props.server}/${props.id}_${props.secret}_${sizeSuffix}.jpg`;

    return(
        <li>
            <img src={url} alt=""/>
        </li>
    );
}

export default Photo;