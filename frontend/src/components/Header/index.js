import React from 'react';
import {Link} from 'react-router-dom';

import './styles.css';
import logo from '../../assets/logo.png';

export default function Header() {
    return (
        <div>
            <header className="header">
                <Link to="/"><img src={logo} width="10%" alt="NETFEI" /></Link>
                <div className="uploadRef">
                    <Link to="/upload" className="uploadLink">Upload a video</Link>
                </div>
            </header>
        </div>
    );
}