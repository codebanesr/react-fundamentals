import React, { Component } from 'react';
import {Link} from 'react-router'


class HomePage extends Component{
  
    render(){
        return (
            <div className="jumbotron">
                <h1>College Administration</h1>
                <p>React Redux and React Router for ultra fast web applications</p>
                <Link to="about" className="btn btn-primary"> Learn More</ Link>
            </div>
        );
    }
}


export default HomePage;