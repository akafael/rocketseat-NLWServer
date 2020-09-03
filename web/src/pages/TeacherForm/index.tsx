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
import Select from '../../components/Select';

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
                        type='url'
                        name="avatar"
                        label="Avatar" 
                    />
                    <Input
                        type='tel'
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

                    <Select 
                        name="subject"
                        label="Matéria"
                        options={[
                            {value: 'Art', label: 'Art'},
                            {value: 'Biology', label: 'Biology'},
                            {value: 'Science', label: 'Science'},
                            {value: 'Physics', label: 'Physics'},
                            {value: 'Chemistry', label: 'Chemistry'},
                            {value: 'Geography', label: 'Geography'},
                            {value: 'History', label: 'History'},
                            {value: 'Math', label: 'Math'},
                            {value: 'English', label: 'English'}
                        ]} 
                    />

                    <Input
                        type='text'
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