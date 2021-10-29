import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

import './styles.css';

export default function Thumbnail({image, title}) {
    const [videoTitle, setVideoTitle] = useState(title);
    useEffect(() => {
        switch(title) {
            case "KK Slider - Buttercup":
                setVideoTitle("KK_buttercup");
                break;
            case "Why Is Blue So Rare In Nature?":
                setVideoTitle("blue");
                break;
            case "Why Do We Have To Sleep?":
                setVideoTitle("why_sleep");
                break;
            case "The Elder Scrolls VI – Official Announcement Teaser":
                setVideoTitle("tesvi");
                break;
        }
    }, [title])
    
    const url = "/watch/" + videoTitle;

    return (
        <li className="videoCard">
            <Link to={url}><img src={image} width="360px" /></Link>
            <span className="title">{title}</span>
        </li>
    );
}