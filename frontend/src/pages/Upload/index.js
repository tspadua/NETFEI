import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';

import './styles.css';
import Header from '../../components/Header';

import thumbnail from '../../assets/thumbnail.png';

import api from '../../services/api';

export default function Upload() {
    const [title, setTitle] = useState("");
    const [video, setVideo] = useState("");

    const history = useHistory();

    async function handleNewVideo(e) {
        e.preventDefault();

        const data = {
            title,
            video
        };

        try{
            await api.post('upload', data, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Accept": "application/json",
                    "type": "formData"
                }                   
            })
            history.push('/');
        }
        catch(err){
            alert('Erro ao upar video, tente novamente');
        }
    }

    return (
        <div>
            <Header />
            <form encType="multipart/form-data" onSubmit={handleNewVideo}>
                <div className="leftSide">
                    <div className="thumbnail">
                        <span className="thumbnailSpan">Thumbnail</span>
                        <img src={thumbnail} />
                    </div>
                </div>
                <div className="rightSide">
                    <div className="title">
                        <label>Title</label>
                        <input
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="fileUpload">
                        <input className="upload" type="file" value={video} onChange={e => setVideo(e.target.value)}></input><br />
                        <button className="button" type="submit">Upload video</button>
                    </div>
                </div>
            </form>
        </div>
    );
}