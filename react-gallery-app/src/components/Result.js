import React from 'react';
import Photo from './Photo';

const Result = props => {

    const results = props.data;
    let photos = results.map(photo =>
        <Photo url='https://live.staticflickr.com/{photo.server}/{photo.id}_{photo.secret}.jpg'
        />
    );

    return(
        <ul className='photo-list'>
            {photos}
        </ul>
    );
}

export default Result;