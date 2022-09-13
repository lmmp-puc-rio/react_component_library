// Card = Card with a image into the top, a text into the bottom and a action button to go to a page
// # Main Import 
import React from 'react';

// # Import Component Style
import './VideoCard.css'

export default function VideoCard(props) {
    const videocard_data = props.data
    const src = "https://www.youtube.com/embed/9K4SCPa70RY";
    return (
        <div className="videocard">
            <div className="videocard-body">
                <h2 className="videocard-title">{videocard_data.title}</h2>
                <iframe className='videocard-image'
                    width="560"
                    height="315"
                    src={videocard_data.src}
                    title={videocard_data.title}
                    frameborder="0"
                    allowFullScreen
                />
                <p className="videocard-description">
                    {videocard_data.description}
                </p>
            </div>

        </div>
    );

}