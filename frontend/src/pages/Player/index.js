import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';

import './styles.css';
import Header from '../../components/Header';

export default function Player() {
    const [title, setTitle] = useState("");
    const url = window.location.pathname;
    useEffect(() => {
        switch(url) {
            case "/watch/KK_buttercup":
                setTitle("KK Slider - Buttercup");
                break;
            case "/watch/blue":
                setTitle("Why Is Blue So Rare In Nature?");
                break;
            case "/watch/why_sleep":
                setTitle("Why Do We Have To Sleep?");
                break;
            case "/watch/tesvi":
                setTitle("The Elder Scrolls VI – Official Announcement Teaser");
                break;
        }
    }, [url])
    const src = "http://localhost:8000/" + url;

    return (
        <div>
            <Header />
            <div className="video">
                <h2>{title}</h2>
                <video id="videoPlayer" width="650" controls muted="muted" autoPlay>
                    <source src={src} type="video/mp4" />
                </video>
            </div>
            
        </div>
    );
}