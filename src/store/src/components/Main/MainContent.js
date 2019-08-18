import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Main.css';

class MainContent extends Component {
    render() {
        const { user } = this.props;
        if (!user.user) {
            return (
                <div className="DefaultMsg">Please Select the user to see Details.</div>
            )
        }
        return (
            <div className="MainContent">
                <div className="MainInner">
                    <div className="MainAvatar">
                        <i className="far fa-user"></i>
                    </div>
                    <div className="MainContentInner">
                        <div className="MainDetails">
                            <label>Name</label>
                            <div>{user.user.name}</div>
                        </div>
                        <div className="MainDetails">
                            <label>id</label>
                            <div>{user.user.id}</div>
                        </div>
                        <div className="MainDetails">
                            <label>Description</label>
                            <div>{user.user.Description}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.activeUser
    }
}

export default connect(mapStateToProps)(MainContent);
