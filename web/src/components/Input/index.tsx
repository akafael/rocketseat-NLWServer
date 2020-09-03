/**
 * Custom Input Field
 */

 // External Imports
import React, {InputHTMLAttributes} from 'react';

// Project Imports
import './styles.css';

/**
 * InputProps Interface Parameters (label, name)
 */
interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    label: string;
    name: string;
}

/**
 *  Build Custom Input Commponent
 * @param param0 
 */
const Input: React.FC<InputProps> = ({ label, name, ...rest }) => {
    return (
        <div className="input-block">
            <label htmlFor={name}>{label}</label>
            <input type="text" id={name} {...rest}/>
        </div>
    );
}

export default Input;
