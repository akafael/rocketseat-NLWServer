/**
 * Landing Page
 */

import React from 'react'
import { Link } from 'react-router-dom'

// Import files from project
import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import './styles.css';

/**
 * Generate Landing Page Component
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
                <Link className="study" to="/study">
                    <img src={studyIcon} alt="Study" className="study"/>
                    Study
                </Link>
                <Link className="give-classes" to="/give-classes">
                    <img src={giveClassesIcon} alt="Give Classes" className="give-classes"/>
                    Give Class
                </Link>
            </div>
            <span className="total-connections">
                Over 2000 connections realized <img src={purpleHeartIcon} alt="Purple Heart"/>
            </span>
        </div>
    </div>
    )
}

export default Landing;