import React from 'react'

// Import files from project
import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import './styles.css';

/**
 * Generate Landing Page HTML
 */
function Landing() {
    return (
        <div id="page-landing">
        <div id="page-landing-content" className="container">
            <div className="logo-container">
                <img src={logoImg} alt=""/>
                <h2>Your online study plataform.</h2>
            </div>
            <img
                src={landingImg}
                alt="Study Plataform"
                className="hero-image"
            />
            <div className="buttons-container">
                <a>
                    <img src={studyIcon} alt="Study" className="study"/>
                    Study
                </a>
                <a>
                    <img src={giveClassesIcon} alt="Give Classes" className="give-classes"/>
                    Give Classes
                </a>
            </div>
            <span className="total-connections">
                Total de 2000 conexões já realizadas <img src={purpleHeartIcon} alt="Purple Heart"/>
            </span>
        </div>
    </div>
    )
}

export default Landing;