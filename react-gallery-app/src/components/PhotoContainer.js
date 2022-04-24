import React from 'react';
import Photo from './Photo';

const PhotoContainer = props => {

    const results = props.data;
    let photos = results.map((photo) => {
        <Photo
                id={photo.id}
                server={photo.server}
                secret={photo.secret}
            />
    });

    console.log('photos ', photos);

    return(
        <div className='photo-container'>
            <h2>Results</h2>
                <ul>
                    {photos}
                </ul>
        </div>
    );
}

export default PhotoContainer;