import React from 'react';
import {Link} from 'react-router-dom';

import './styles.css';
import logo from '../../assets/logo.png';

export default function Header() {
    return (
        <div>
            <header className="header">
                <img src={logo} width="10%" alt="NETFEI" />
                <div className="uploadRef">
                    <Link to="/Upload" className="uploadLink">Upload a video</Link>
                </div>
            </header>
        </div>
    );
}