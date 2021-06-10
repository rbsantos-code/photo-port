import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from '../../assets/small/commercial/0.jpg'


function Gallery(props) {

    const currentGallery = {
        name: 'commercial',
        description: 'Photos of grocery stores, food trucks, and other commerical projects',
    };

    return (
        <section>
            <h1>{capitalizeFirstLetter(currentGallery.name)}</h1>
            <p>{currentGallery.name}</p>
            <div className='flex-row'>
                <img src={photo} alt='Commercial Example' className='img-thumbnail mx-1'></img>
            </div>
        </section>
    );
};


export default Gallery;