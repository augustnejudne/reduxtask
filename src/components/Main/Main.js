import React, { Component } from 'react';
import MainContent from "./MainContent";
import './Main.css';

class Main extends Component {
    render() {
        return (
            <div className="Main">
                <MainContent />
            </div>
        )
    }
}

export default Main;