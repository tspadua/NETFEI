import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';

import './styles.css';
import Header from '../../components/Header';
import Thumbnail from '../../components/Thumbnail';

import thumbnail from '../../assets/thumbnail.png';

import api from '../../services/api';

export default function Home() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        api.get('index').then(response => {
            setVideos(response.data)
        })
    }, []);

    return (
        <div>
            <Header />
            <ul>
                {videos.map(video => (
                    <Thumbnail image={thumbnail} 
                               title={video.title}/>
                ))}
            </ul>
        </div>
    );
}