/**
 * Teacher Form TSX
 */

// External Imports
import React from 'react';

// Project Imports
import warningIcon from '../../assets/images/icons/warning.svg';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/PageHeader';

import './styles.css';

/**
 * Build Teacher Form Component
 */
function TeacherForm() {
    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
                title="That's incredible that you'd like to give classes!"
                description="Just fill the inscription form"
            />
            <main>
                <form action="">
                <fieldset>
                    <legend>Personal Information</legend>
                    <Input
                        name="name"
                        label="Name"
                    />
                    <Input
                        name="avatar"
                        label="Avatar" 
                    />
                    <Input
                        name="whatsapp"
                        label="WhatsApp" 
                    />
                    <Textarea
                        name="bio"
                        label="Biografia"
                    />
                </fieldset>

                <fieldset>
                    <legend>Class Information</legend>
                    <Input
                        name="cost"
                        label="Class cost per hour"
                    />
                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Importante Note"/>
                        Alert! <br /> Fill all fields!
                    </p>
                    <button type="submit">Save</button>
                </footer>
                </form>
            </main>
        </div>
    )
}

export default TeacherForm;