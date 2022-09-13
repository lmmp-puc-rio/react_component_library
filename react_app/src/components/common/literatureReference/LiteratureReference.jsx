// Row -> Line with a image and a text side-by-side
// Row type 1 
// | image | text |
// Row type 2
// | text | image |
// # Main Import 
import React, { Children } from 'react';

// # Import Component Style
import './LiteratureReference.css'

function LiteratureReference(props) {
    const literature_data = props.data
    return (
        <li >
            <a className="literature-element" href={literature_data.link}>{literature_data.tittle} [{literature_data.year}] </a>
            <br />
            <br />
        </li>
    );
}

export default function LiteratureReferences(props) {
    const literature_data = props.data
    return (
        <div className="literature-component">
            <ul className="literature-element-list">
                {literature_data.map((newref) => (
                    <LiteratureReference data={newref}
                    />
                ))}
            </ul>

        </div>
    );
}