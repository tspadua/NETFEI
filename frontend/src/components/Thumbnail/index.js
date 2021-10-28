import React from 'react';
import {Link} from 'react-router-dom';

import './styles.css';

export default function Thumbnail({image, title}) {
    return (
        <li className="videoCard">
            <img src={image} />
            <span className="title">{title}</span>
        </li>
    );
}