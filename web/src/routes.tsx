/**
 * Manage all routes as commponents
 */

 // External Imports
import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

// Project Imports
import Landing from './pages/Landing';
import TeacherList from './pages/TeacherLists';
import TeacherForm from './pages/TeacherForm';

/**
 * Connect each route with a commponent
 */
function Routes() {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Landing}/>
            <Route path="/study" component={TeacherList}/>
            <Route path="/give-classes" component={TeacherForm}/>
        </BrowserRouter>
    )
}

export default Routes;