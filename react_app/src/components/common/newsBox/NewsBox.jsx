// Row -> Line with a image and a text side-by-side
// Row type 1 
// | image | text |
// Row type 2
// | text | image |
// # Main Import 
import React from 'react';

// # Import Component Style
import './NewsBox.css'

export default function NewsBox(props) {
    const newsBox_data = props.data
    if (newsBox_data.type == 1)
        return (
            <div className="row-component">
                <div>
                    <br />
                    <br />
                </div>
                <div className="row-image-left">
                    <img src={newsBox_data.img} class="newsBox-image" />
                </div>
                <div>
                    <h1 className="row-title-right">{newsBox_data.tittle}</h1>
                    <p className="row-text-right">{newsBox_data.text}</p>
                </div>
                <div>
                    <br />
                    <br />
                </div>
            </div>
        );
    // Else
    return (
        <div className="row-component">
            <div>
                <br />
                <br />
            </div>
            <div>
                <h1 className="row-title-left">{newsBox_data.tittle}</h1>
                <p className="row-text-left">{newsBox_data.text}</p>
            </div>
            <div className="row-image-right">
                <img src={newsBox_data.img} class="newsBox-image" />
            </div>
            <div>
                <br />
                <br />
            </div>
        </div>
    );

}