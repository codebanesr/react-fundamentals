import React from 'react';
import { Route, IndexRoute, Router } from 'react-router';
import HomePage from './components/home/HomePage';
import App from './App';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/courses/CoursesPage';



export default (

    <Router path="/" component={App}>
    {/* dump whatever component you have into this.props.children ;; App is the layout for our project*/}

        <IndexRoute component={HomePage}/>
        {/* when nothing is specified children=Homepage */}
        <Route path="about" component={AboutPage} />
        {/* on about children=AboutPage */}
        <Route path="courses" component={CoursesPage} />
    </Router>
);

