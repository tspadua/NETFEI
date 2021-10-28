import React from 'react';
import {Link} from 'react-router-dom';

import './styles.css';

export default function Thumbnail({image, title}) {
    const url = "/watch/" + title;
    return (
        <li className="videoCard">
            <Link to={url}><img src={image} /></Link>
            <span className="title">{title}</span>
        </li>
    );
}