/**
 * Teacher List Page Components
 */

// External Imports
import React from 'react';

// Project Imports
import './styles.css';
import warningIcon from '../../assets/images/icons/warning.svg';
import PageHeader from '../../components/PageHeader';
import Select from '../../components/PageHeader';
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

                    <Input
                        type="text"
                        name="Week Day"
                        label="Week Day"
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