/**
 * Teacher List Page Components
 */

// External Imports
import React from 'react';

// Project Imports
import './styles.css';
import PageHeader from '../../components/PageHeader';

/**
 * Build Teacher List Component
 */
function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Proffys available"></PageHeader>
            <h1>Classes List</h1>
        </div>
    )
}

export default TeacherList;