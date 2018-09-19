import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NewTask from './newTask';

class TheNav extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">
                    <header className="display-3">
                        { this.props.theTitle }
                    </header>
                    <span className="title-back">
                {this.props.theTitle}
                    </span>
                </Link> 
                <NewTask />
            </nav>
        )
    }
}
export default TheNav;