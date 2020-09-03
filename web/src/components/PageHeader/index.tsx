/**
 * Page Header
 */

 // External Imports
import React from 'react';
import {Link} from 'react-router-dom';

// Project Imports
import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';
import './styles.css';

/**
 * Interface to group parameters used by PageHeader
 */
interface PageHeaderProps {
    title: string;
    description?: string;
}

/**
 * Build PageHeader using PageHeaderProps as Interface
 * @param props Page Header Parammeters (title and description)
 */
const PageHeader: React.FC<PageHeaderProps> = (props)  => {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={backIcon} alt="Voltar"/>
                </Link>
                <img src={logoImg} alt="Proffy"/>
            </div>
            <div className="header-content">
                <strong>{props.title}</strong>
                {props.description && 
                    <p>{props.description}</p>
                }
            {props.children}
            </div>
        </header>
    )
}

export default PageHeader;