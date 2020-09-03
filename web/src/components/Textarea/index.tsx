/**
 * Custom Multi Line Input Component
 */

// External Imports
import React, {TextareaHTMLAttributes} from 'react';

// Project Imports
import './styles.css';

/**
 * TextArea Interface Properties (label, name)
 */
interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{
    label: string;
    name: string;
}

/**
 * Build Custom Multi Line Input Component
 * @param param0 
 */
const Textarea: React.FC<TextareaProps> = ({ label, name, ...rest }) => {
    return (
        <div className="textarea-block">
            <label htmlFor={name}>{label}</label>
            <textarea id={name} {...rest}/>
        </div>
    );
}

export default Textarea;
