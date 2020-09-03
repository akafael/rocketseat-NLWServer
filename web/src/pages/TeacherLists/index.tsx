/**
 * Teacher List Page Components
 */

// External Imports
import React from 'react';

// Project Imports
import './styles.css';
import warningIcon from '../../assets/images/icons/warning.svg';
import PageHeader from '../../components/PageHeader';
import Select from '../../components/Select';
import Input from '../../components/Input';

/**
 * Build Teacher List Component
 */
function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Proffys available">
                <form id="search-teachers">

                    <Input
                        type="text"
                        name="Subject"
                        label="Subject"
                    />

                    <Select 
                        name="week_day"
                        label="Week Day"
                        options={[
                            {value: '0', label: 'Sunday'},
                            {value: '1', label: 'Monday'},
                            {value: '2', label: 'Tuesday'},
                            {value: '3', label: 'Wednesday'},
                            {value: '4', label: 'Thuesday'},
                            {value: '5', label: 'Friday'},
                            {value: '6', label: 'Saturday'},
                        ]} 
                    />

                    <Input
                        type="time"
                        name="time"
                        label="Hour"
                    />

                    <button type="submit">Search</button>
                </form>
            </PageHeader>
        </div>
    )
}

export default TeacherList;