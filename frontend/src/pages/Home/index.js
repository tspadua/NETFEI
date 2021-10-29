import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';

import './styles.css';
import Header from '../../components/Header';
import Thumbnail from '../../components/Thumbnail';

import thumb1 from '../../assets/thumb1.png';
import thumb2 from '../../assets/thumb2.png';
import thumb3 from '../../assets/thumb3.png';
import thumb4 from '../../assets/thumb4.png';

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
                <Thumbnail image={thumb1} title="KK Slider - Buttercup"/>
                <Thumbnail image={thumb2} title="Why Is Blue So Rare In Nature?"/>
                <Thumbnail image={thumb3} title="Why Do We Have To Sleep?"/>
                <Thumbnail image={thumb4} title="The Elder Scrolls VI – Official Announcement Teaser"/>
            </ul>
        </div>
    );
}