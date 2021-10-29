import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';

import './styles.css';
import Header from '../../components/Header';

import api from '../../services/api';

export default function Player() {
    const [video, setVideo] = useState([]);

    useEffect(() => {
        api.get('watch').then(response => {
            setVideo(response.data);
            console.log(video);
        })
    }, []);

    return (
        <div>
            <Header />
            <h2>HTTP Video Streaming</h2>
            <video id="videoPlayer" width="650" controls muted="muted" autoPlay>
                <source src="http://localhost:8000/watch/bigbuck" type="video/mp4" />
            </video>
        </div>
    );
}