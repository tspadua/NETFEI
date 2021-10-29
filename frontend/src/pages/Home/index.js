import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';

import './styles.css';
import Header from '../../components/Header';
import Thumbnail from '../../components/Thumbnail';

import thumbnail from '../../assets/thumbnail1.jpg';

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
                <Thumbnail image={thumbnail} title="teste"/>
                <Thumbnail image={thumbnail} title="teste"/>
                <Thumbnail image={thumbnail} title="teste"/>
                <Thumbnail image={thumbnail} title="teste"/>
            </ul>
        </div>
    );
}